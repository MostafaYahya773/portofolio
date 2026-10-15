import { createContactHandler } from '../../../../lib/contact/handler';
import { createClient } from '../../../../lib/supabase/server';

export const runtime = 'nodejs';

export const POST = createContactHandler(async (message) => {
  const supabase = await createClient();
  const { error } = await supabase.from('contact').insert(message);
  return { error };
});
