import React, { useEffect } from "react";
import "./css/Main.css";

import LeftSide from "./tools/Main/leftside";
import RightSide from "./tools/Main/rightside";

function Main() {
  useEffect(() => {
    // left side
    LeftSide();
    // right side
    RightSide();
  });
  return (
    <>
      <div id="mainPage">
        <div id="profileTitle">About me</div>
        <div id="profile">
          <div className="background-image1"></div>
        </div>
        <div id="myWorkTitle">My Work</div>
        <div id="myWork">
          <div className="background-image2"></div>
        </div>
      </div>
    </>
  );
}

export default Main;
