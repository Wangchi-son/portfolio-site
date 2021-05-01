import React from "react";
import { Route } from "react-router-dom";
import AboutMe from "./page/pages/AboutMe";
import Homepage from "./page/pages/Homepage";
import Main from "./page/pages/Main";
import MyWorks from "./page/pages/MyWorks";
// import Tutorial1 from "./canvas/Tutorial1";

function App() {
  return (
    <>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/myworks" component={MyWorks} />
    </>
  );
}

export default App;
