import React from 'react';
import Nav from './_components/nav/page';
import Hero from './_components/hero/page';
import MyPages from './_components/pages/page';
import Skills from './_components/skills/page';

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <section>
        <Hero />
      </section>
      <section>
        <MyPages />
      </section>
      <section>
        <Skills />
      </section>
    </div>
  );
}
