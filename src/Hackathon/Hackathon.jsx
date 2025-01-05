import { useState, useEffect } from 'react';
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Parallax from "../Parallax/Parallax";
import { LenisComponent } from "../Lenis/Lenis.js";
import GitWatch from '../GitWatch/GitWatch.jsx';
import Countdown from '../countdown/Countdown.jsx';

import Lines from "../Lines/Lines.jsx"; import './Hackathon.css'

let EndTime = "Jan 9 25 00:00:00"
function Hackathon() {
  return (
    <>
      <Nav home events />
      <Lines />
      <LenisComponent />
      <Parallax />
      <div className="hackathonComponent">
        <div className="upperHalf">
          <Countdown displayDays='true' />
        </div>
        <div className="gitWatchContainer">
          <GitWatch className="hello" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Hackathon;
