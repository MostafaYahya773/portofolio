import { FiArrowUpRight, FiCode, FiLayers, FiUsers } from 'react-icons/fi';
import Link from 'next/link';

const capabilities = [
  { number: '01', icon: FiLayers, title: 'Interface engineering', description: 'Responsive React and Next.js interfaces with clear hierarchy, reusable components, and thoughtful interaction states.', items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { number: '02', icon: FiCode, title: 'Frontend systems', description: 'Typed application logic and predictable data flows that keep the experience fast, maintainable, and easier to extend.', items: ['TypeScript', 'TanStack Query', 'Formik', 'Context API'] },
  { number: '03', icon: FiUsers, title: 'Product delivery', description: 'From design handoff to deployment, with backend integration and close attention to the details users actually feel.', items: ['Supabase', 'Figma', 'Git', 'Vercel'] },
];

export default function MySkills() {
  return (
    <section className="bg-slate-950 px-4 py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-[.75fr_1.25fr] md:items-end">
          <div><p className="font-mono text-12 font-semibold tracking-[0.22em] text-teal-300">01 · CAPABILITIES</p><h2 className="mt-4 text-35 font-bold tracking-[-0.03em] md:text-[3.25rem]">How I build.</h2></div>
          <p className="max-w-[650px] text-16 leading-8 text-slate-300 md:justify-self-end md:text-18">Good frontend work sits between design, engineering, and product thinking. These are the three areas I bring together.</p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3">
          {capabilities.map(({ number, icon: Icon, title, description, items }) => (
            <article key={number} className="group bg-slate-950 p-7 transition hover:bg-slate-900 md:p-9">
              <div className="flex items-center justify-between"><span className="font-mono text-12 text-slate-500">{number}</span><span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-teal-300 transition group-hover:border-teal-300/40 group-hover:bg-teal-300/10"><Icon aria-hidden="true" /></span></div>
              <h3 className="mt-10 text-24 font-bold tracking-[-0.02em]">{title}</h3>
              <p className="mt-4 min-h-[104px] text-14 leading-7 text-slate-400">{description}</p>
              <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${title} tools`}>{items.map((item) => <li key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-12 text-slate-300">{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <Link href="/About" className="mt-9 inline-flex items-center gap-2 text-14 font-bold text-teal-300 hover:text-white">More about my approach <FiArrowUpRight aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
