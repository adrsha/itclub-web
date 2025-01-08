import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Parallax from "../Parallax/Parallax";
import { LenisComponent } from "../Lenis/Lenis.js";
import GitWatch from "../GitWatch/GitWatch.jsx";
import { GitDetails } from "../GitWatch/GitWatch.jsx";
import Countdown from "../countdown/Countdown.jsx";

import Lines from "../Lines/Lines.jsx";
import "./Hackathon.css";

function Hackathon() {

  let StartTime = "Jan 9 25 09:00:00";
  let EndTime = "Jan 11 25 09:00:00";
  let currentTime = new Date();
  let eventStart = currentTime < new Date(StartTime) ? false : true
  return (
    <>
      <Nav home events />
      <Lines />
      <LenisComponent />
      <Parallax />
      <div className="hackathonComponent">
        <div className="upperHalf">
          <Countdown displayDays={true} endDate={(eventStart ? EndTime : StartTime)} eventStart={eventStart} />
          <div className="gitInfo">
            <div className="glass infoContents" >
              <h3>Leaderboard</h3>
              <div className="leaderboardContainer" data-lenis-prevent>
              {
                GitDetails().map(data => (
                  <div className="leaderboardContent" key={data.name}>
                    <div className="leaderboardName">{
                      data.name
                    }</div>
                    <div className="leaderboardCommits">
                      {data.commits}
                    </div>
                    </div>
                ))
              }
              </div>
            </div>
          </div>
        </div>
        <div className="gitWatchContainer">
          <GitWatch />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Hackathon;
