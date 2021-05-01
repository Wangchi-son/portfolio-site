import React from 'react';
import './css/MyWorks.css';

import HomeButton from '../pageSet/tools/HomeButton';

function MyWorks() {
  return (
    <>
      <HomeButton />
      <div className="myWorkContainer">
        <section className="first panels blue">
          <h1>First Page</h1>
        </section>
        <section className="panels red">
          <h1>Second Page</h1>
        </section>
        <section className="panels orange">
          <h1>Third Page</h1>
        </section>
        <section className="panels purple">
          <h1>Fourth Page</h1>
        </section>
        <section className="panels green">
          <h1>Fifth Page</h1>
        </section>
      </div>
    </>
  );
}

export default MyWorks;
