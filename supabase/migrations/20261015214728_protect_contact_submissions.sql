-- Public visitors can submit messages, but only the existing admin policies can read or manage them.
alter table public.contact enable row level security;
alter table public.projects enable row level security;
revoke all on public.contact from anon;
grant insert (name, email, subject, description) on public.contact to anon;
revoke all on public.projects from anon;
grant select on public.projects to anon;
revoke truncate, references, trigger on public.contact, public.projects from authenticated;

-- Keep bookkeeping outside the Data API. No caller can inspect or edit these counters.
create schema if not exists private;
revoke all on schema private from public, anon, authenticated;
create table private.contact_rate_limits (
  bucket_key text primary key,
  window_start timestamptz not null,
  attempts integer not null check (attempts > 0)
);
alter table private.contact_rate_limits enable row level security;
revoke all on private.contact_rate_limits from public, anon, authenticated;
create index contact_rate_limits_window_idx on private.contact_rate_limits (window_start);

-- This trigger intentionally supports anonymous visitors. SECURITY DEFINER is limited
-- to private counter bookkeeping: it is not an exposed RPC and never reads messages.
create function private.guard_contact_submission()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  hits integer;
  submitted_at timestamptz := statement_timestamp();
begin
  new.name := btrim(new.name);
  new.email := lower(btrim(new.email));
  new.description := btrim(new.description);
  if new.name is null or char_length(new.name) not between 3 and 100
    or new.email is null or char_length(new.email) > 254
    or new.email !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
    or new.subject is null or new.subject not in ('project', 'freelance', 'other')
    or new.description is null or char_length(new.description) not between 10 and 5000 then
    raise exception using errcode = '23514', message = 'Invalid contact message';
  end if;

  -- Atomic UPSERTs serialize concurrent submissions across all server instances.
  insert into private.contact_rate_limits as limits (bucket_key, window_start, attempts)
  values ('global', submitted_at, 1)
  on conflict (bucket_key) do update
    set attempts = case when limits.window_start <= submitted_at - interval '1 minute' then 1 else limits.attempts + 1 end,
        window_start = case when limits.window_start <= submitted_at - interval '1 minute' then submitted_at else limits.window_start end
  returning attempts into hits;
  if hits > 30 then
    raise exception using errcode = 'P0001', message = 'Contact rate limit exceeded';
  end if;

  insert into private.contact_rate_limits as limits (bucket_key, window_start, attempts)
  values ('email:' || md5(new.email), submitted_at, 1)
  on conflict (bucket_key) do update
    set attempts = case when limits.window_start <= submitted_at - interval '15 minutes' then 1 else limits.attempts + 1 end,
        window_start = case when limits.window_start <= submitted_at - interval '15 minutes' then submitted_at else limits.window_start end
  returning attempts into hits;
  if hits > 3 then
    raise exception using errcode = 'P0001', message = 'Contact rate limit exceeded';
  end if;

  delete from private.contact_rate_limits where window_start < submitted_at - interval '1 day';
  new.created_at := submitted_at;
  new.updated_at := submitted_at;
  return new;
end;
$$;
revoke all on function private.guard_contact_submission() from public, anon, authenticated;
create trigger guard_contact_submission
before insert on public.contact
for each row execute function private.guard_contact_submission();

alter function public.handle_updated_at() set search_path = '';
