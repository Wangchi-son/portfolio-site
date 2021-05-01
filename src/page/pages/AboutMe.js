import gsap, { ScrollTrigger, ScrollToPlugin, TextPlugin } from 'gsap/all';
import React, { useEffect } from 'react';
import './css/AboutMe.css';

import AboutmeTitle from '../pageSet/AboutMe/AboutmeTitle';
import { ScrollEffects } from './Exfuncs/AboutMe/ScrollEffects';

import HomeButton from '../pageSet/tools/HomeButton';

function AboutMe() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

    // anchor 옵션
    const panelsContainer = document.querySelector('.row');

    document.querySelectorAll('.anchor').forEach((anc, i) => {
      anc.addEventListener('click', (e) => {
        e.preventDefault();
        const targetElem = document.querySelector(
          e.target.getAttribute('href')
        );
        if (
          targetElem &&
          panelsContainer.isSameNode(targetElem.parentElement)
        ) {
          gsap.to(window, {
            scrollTo: {
              y: targetElem.offsetLeft + (targetElem.offsetWidth / 2) * i,
              autoKill: false
            },
            duration: 1
          });
        }
      });
    });

    // 패널 옵션
    const aboutMePanels = gsap.utils.toArray('.aboutMePanel');
    let maxWidth = 0;

    const getMaxWidth = () => {
      maxWidth = 0;
      aboutMePanels.forEach((panel) => {
        maxWidth += panel.offsetWidth;
      });
    };
    getMaxWidth();

    gsap.to(aboutMePanels, {
      xPercent: -100 * (aboutMePanels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.overX',
        pin: true,
        scrub: 1,
        snap: 1 / (aboutMePanels.length - 1),
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true
      }
    });
    ScrollTrigger.addEventListener('refreshInit', getMaxWidth);

    // 스크롤 감지 효과
    ScrollEffects(aboutMePanels, maxWidth);
  });
  return (
    <>
      <HomeButton />
      <div className="mainContainer">
        <div id="navbar">
          <a href="#panel-1" className="anchor anc0 stateWhite1 stateBlack2">
            &sdot;
          </a>
          <a href="#panel-2" className="anchor anc1 stateWhite1 stateBlack2">
            &sdot;
          </a>
          <a href="#panel-3" className="anchor anc2 stateWhite1 stateBlack2">
            &sdot;
          </a>
        </div>
        <div className="overX">
          <div className="row">
            <div className="full aboutMePanel" id="panel-1"></div>
            <div className="full aboutMePanel" id="panel-2"></div>
            <div className="full bgWhite aboutMePanel " id="panel-3"></div>
            <div className="profile"></div>
            <h1 className="mainTitle">
              <p className="p">
                I'm a
                <br />
                Frontend
                <br />
                Web Developer
              </p>
            </h1>
            <AboutmeTitle />
          </div>
        </div>
        <div className="stateWhite0 stateWhite2 stateBlack0 stateBlack1 lightOut0 lightOut2 nothing"></div>
      </div>
    </>
  );
}

export default AboutMe;
