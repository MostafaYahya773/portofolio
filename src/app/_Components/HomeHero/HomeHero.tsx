import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight, FiMapPin } from 'react-icons/fi';
import { SiNextdotjs, SiReact, SiSupabase, SiTypescript } from 'react-icons/si';

const stack = [
  { label: 'React', icon: SiReact },
  { label: 'Next.js', icon: SiNextdotjs },
  { label: 'TypeScript', icon: SiTypescript },
  { label: 'Supabase', icon: SiSupabase },
];

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-20 pt-12 md:pb-28 md:pt-20 lg:min-h-[760px] lg:pt-28">
      <div aria-hidden="true" className="absolute left-[-12rem] top-[-8rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-indigo-300/20 blur-3xl dark:bg-indigo-500/10" />
      <div aria-hidden="true" className="absolute bottom-10 right-[-10rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-400/10" />
      <div className="mx-auto grid max-w-[1300px] items-center gap-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-700/15 bg-emerald-50 px-3 py-1.5 text-12 font-semibold text-emerald-800 dark:border-emerald-300/20 dark:bg-emerald-300/10 dark:text-emerald-200">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" /></span>
            Available for remote collaboration
          </div>
          <p className="mb-4 font-mono text-12 font-semibold tracking-[0.22em] text-light-bg-cta dark:text-dark-teal">FRONTEND DEVELOPER · CAIRO</p>
          <h1 className="max-w-[780px] text-[2.7rem] font-bold leading-[1.03] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-[3.75rem] lg:text-[4.6rem]">
            I turn product ideas into <span className="bg-gradient-to-r from-indigo-700 to-teal-600 bg-clip-text text-transparent dark:from-indigo-300 dark:to-teal-300">polished web experiences.</span>
          </h1>
          <p className="mt-7 max-w-[640px] text-16 leading-8 text-slate-600 dark:text-slate-300 md:text-18">I build responsive interfaces with React and Next.js, then connect them to reliable data flows with TypeScript and Supabase.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/Projects" className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-14 font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-indigo-700 dark:bg-white dark:text-slate-950 dark:hover:bg-dark-teal">Explore my work <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></Link>
            <Link href="/ContactUs" className="inline-flex items-center rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-14 font-bold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-indigo-400 dark:border-white/15 dark:bg-white/5 dark:text-white">Start a conversation</Link>
          </div>
          <div className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6 dark:border-white/10">
            <span className="text-12 font-semibold uppercase tracking-[0.18em] text-slate-400">Core stack</span>
            {stack.map(({ label, icon: Icon }) => <span key={label} className="inline-flex items-center gap-2 text-14 font-semibold text-slate-600 dark:text-slate-300"><Icon className="text-16 text-indigo-700 dark:text-dark-teal" aria-hidden="true" />{label}</span>)}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[480px] lg:mr-0">
          <div aria-hidden="true" className="absolute -inset-3 rotate-3 rounded-[2.25rem] bg-gradient-to-br from-indigo-600 to-teal-500 opacity-20 dark:opacity-40" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-slate-100 p-2 shadow-2xl shadow-indigo-950/15 dark:border-white/10 dark:bg-slate-900">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
              <Image src="/my_image.jpeg" alt="Mostafa Yahya, frontend developer" fill preload sizes="(min-width: 1024px) 440px, 90vw" className="object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-slate-950/65 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white"><p className="text-20 font-bold">Mostafa Yahya</p><p className="mt-1 flex items-center gap-2 text-14 text-white/80"><FiMapPin aria-hidden="true" /> Cairo, Egypt</p></div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/90"><p className="text-12 uppercase tracking-[0.16em] text-slate-400">Focus</p><p className="mt-1 text-14 font-bold text-slate-900 dark:text-white">UI craft + solid logic</p></div>
        </div>
      </div>
    </section>
  );
}
