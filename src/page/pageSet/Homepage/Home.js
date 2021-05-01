import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./css/Home.css";

function Home() {
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
