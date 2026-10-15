'use client';

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="max-w-2xl mx-auto px-5 py-32 text-center dark:text-dark-button-text text-light-text-primary" role="alert">
      <h1 className="text-28 font-bold mb-4">Something went wrong</h1>
      <p className="mb-6">We couldn’t load this page. Please try again, or email me at <a className="underline" href="mailto:mostafayahya000@gmail.com">mostafayahya000@gmail.com</a>.</p>
      <button onClick={reset} className="rounded-full px-6 py-3 bg-light-bg-cta text-white">Try again</button>
    </section>
  );
}
