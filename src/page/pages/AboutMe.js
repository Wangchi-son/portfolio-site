import React, { useEffect } from "react";
import "./css/AboutMe.css";

function AboutMe() {
  useEffect(() => {});
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
          <div className="full a panel" id="panel-1"></div>
          <div className="full b panel" id="panel-2"></div>
          <div className="full c panel " id="panel-3"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
