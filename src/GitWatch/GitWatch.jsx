import React, { useState, useEffect } from "react";
// import Countdown from './countdown/Countdown.jsx';
// import isMobile from './ExtraFuncs.js';
// import Parallax from './Parallax/Parallax.js';
// import Cards from './Cards/Cards.jsx';
// import notices from '../data/Notices.json';
// import Lines from './Lines/Lines.jsx';
// import { LenisComponent } from './Lenis/Lenis.js';
import GitWatchJSON from "../../data/GitWatch.json";

// https://api.github.com/repos/ShresthaAnkit/InternTasks/commits

export default function GitWatch() {
  const [repoData, setRepoData] = useState(null);
  GitWatchJSON.forEach((gw) => {
    fetch(
      `https://api.github.com/repos/${gw.username}/${gw.repository}/commits`,
    ) // Replace with the actual URL
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        data.forEach((d) => {
          setRepoData(<div className="gitData">{d.author}</div>);
        });
      })
      .catch((error) => {
        console.error("Error fetching the JSON:", error);
      });
  });

  return <div>{repoData}</div>;
}
