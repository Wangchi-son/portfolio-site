import gsap, { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import React, { useEffect } from "react";
import "./css/AboutMe.css";

function AboutMe() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // anchor 옵션
    const panelsContainer = document.querySelector(".row");

    document.querySelectorAll(".anchor").forEach((anc, i) => {
      anc.addEventListener("click", (e) => {
        e.preventDefault();
        const targetElem = document.querySelector(
          e.target.getAttribute("href")
        );
        if (
          targetElem &&
          panelsContainer.isSameNode(targetElem.parentElement)
        ) {
          gsap.to(window, {
            scrollTo: {
              y: targetElem.offsetLeft + (targetElem.offsetWidth / 2) * i,
              autoKill: false,
            },
            duration: 1,
          });
        }
      });
    });

    // 패널 옵션
    const aboutMePanels = gsap.utils.toArray(".aboutMePanel");
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
      ease: "none",
      scrollTrigger: {
        trigger: ".overX",
        pin: true,
        scrub: 1,
        snap: 1 / (aboutMePanels.length - 1),
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true,
      },
    });
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);
  });
  return (
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
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
