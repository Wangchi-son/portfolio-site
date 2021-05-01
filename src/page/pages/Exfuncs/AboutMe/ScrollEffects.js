import gsap, { ScrollTrigger, TextPlugin } from 'gsap/all';

export function ScrollEffects(aboutMePanels, maxWidth) {
  const titleList = [
    "I'm a<br />Frontend<br /> Web Developer",
    'Introduce <br/> My self',
    'I Want To Be...'
  ];
  aboutMePanels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: () =>
        `top top-=${
          (panel.offsetLeft - window.innerWidth / 2) *
          (maxWidth / (maxWidth - window.innerWidth))
        }`,
      end: () =>
        `+=${panel.offsetWidth * (maxWidth / (maxWidth - window.innerWidth))}`,
      toggleClass: { targets: panel, className: 'move' + i },
      onEnter: () => {
        gsap.to('.p', {
          duration: 1.4,
          text: titleList[i]
        });
        gsap.to(`.anc${i}`, {
          opacity: 1
        });
        gsap.to(`.stateBlack${i}`, {
          color: 'rgb(0,0,0)'
        });
      },
      onEnterBack: () => {
        gsap.to('.p', {
          duration: 1.4,
          text: titleList[i]
        });
        gsap.to(`.anc${i}`, {
          opacity: 1
        });
        gsap.to(`.stateWhite${i}`, {
          color: 'rgb(255,255,255)'
        });
      },
      onLeave: () => {
        gsap.to(`.anc${i}`, {
          opacity: 0.7
        });
      },
      onLeaveBack: () => {
        gsap.to(`.anc${i}`, {
          opacity: 0.7
        });
      }
    });
  });
}
