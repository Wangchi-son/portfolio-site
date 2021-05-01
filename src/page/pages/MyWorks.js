import gsap, { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';
import './css/MyWorks.css';

import HomeButton from '../pageSet/tools/HomeButton';

function MyWorks() {
  useEffect(() => {
    let myworksPanels = gsap.utils.toArray('.myworksPanels');
    let currentSection = myworksPanels[0];

    gsap.set('.myWorkContainer', {
      height: myworksPanels.length * 100 + 'vh'
    });
    gsap.registerPlugin(ScrollTrigger);
    myworksPanels.forEach((panel, i) => {
      ScrollTrigger.create({
        start: () => (i - 0.5) * window.innerHeight,
        end: () => (i + 0.5) * window.innerHeight,
        onToggle: (self) => self.isActive && setSection(panel)
      });
    });

    function setSection(newSection) {
      if (newSection !== currentSection) {
        gsap.to(currentSection, { scale: 0.8, autoAlpha: 0 });
        gsap.to(newSection, { scale: 1, autoAlpha: 1 });
        currentSection = newSection;
      }
    }
  });
  return (
    <>
      <HomeButton />
      <div className="myWorkContainer">
        <section className="first myworksPanels blue">
          <h1>First Page</h1>
        </section>
        <section className="myworksPanels red">
          <h1>Second Page</h1>
        </section>
        <section className="myworksPanels orange">
          <h1>Third Page</h1>
        </section>
        <section className="myworksPanels purple">
          <h1>Fourth Page</h1>
        </section>
        <section className="myworksPanels green">
          <h1>Fifth Page</h1>
        </section>
      </div>
    </>
  );
}

export default MyWorks;
