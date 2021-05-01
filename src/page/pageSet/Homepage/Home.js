import gsap from "gsap/all";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./css/Home.css";

function Home() {
  useEffect(() => {
    // link 효과
    gsap.set("#link", {
      opacity: 0,
      display: "none",
    });
    gsap.to("#link", {
      opacity: 1,
      display: "block",
      duration: 1,
    });
  });
  return (
    <>
      <div className="container" id="container">
        <h1 className="title" id="title">
          <span id="title1">WELCOME</span> &nbsp;
          <span id="title2">MY</span> &nbsp;
          <span id="title3">PORTFOLIO</span>
        </h1>
        <Button />
        <Link to="/main" className="link" id="link">
          Enter
        </Link>
      </div>
    </>
  );
}

export default Home;
