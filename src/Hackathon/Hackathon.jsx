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

let EndTime = "Jan 6 25 23:23:23";
function Hackathon() {
  return (
    <>
      <Nav home events />
      <Lines />
      <LenisComponent />
      <Parallax />
      <div className="hackathonComponent">
        <div className="upperHalf">
          <Countdown displayDays={true}  endDate = {EndTime}/>
          <div className="gitInfo">
            <div className="glass gitLatestCommit infoContents">
              <span id="latestCommitAuthor">
                {GitDetails().latestCommit.author}
              </span>
              {" "}committed on{" "}
              <span id="latestCommitRepo">
                {GitDetails().latestCommit.repo}
              </span>
            </div>
            <div className="glass noOfRepos infoContents">
              Number Of Repositories
              <span>{GitDetails().noOfRepos}</span>
                
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
