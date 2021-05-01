import React, { useEffect } from "react";
import "./css/Main.css";

function Main() {
  useEffect(() => {});
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
