import Link from 'next/link';

export default function EmptyProjects() {
  return <div className="rounded-2xl border border-light-border-card dark:border-dark-border-card p-10 text-center text-light-text-secondary dark:text-dark-button-text">
    <p className="text-20 font-bold mb-3">Projects are on the way</p>
    <p>Want to discuss something we could build? <Link href="/ContactUs" className="underline">Get in touch</Link>.</p>
  </div>;
}
