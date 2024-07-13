import { useState } from "react";
import "./Countdown.css";
import eventData from "../../data/Events.json";
import confettiImg1 from "/confetti1.gif";
import confettiImg2 from "/confetti2.gif";
import confettiImg3 from "/confetti3.gif";
import confettiSound from "/sound.mp3";
import mouseImg from "/m1.png";

// get the latest event
let latestEvent = eventData[0];
let tempDate;

for (let i = 0; i < eventData.length; i++) {
  tempDate = new Date(eventData[i].eventDate);
  let today = new Date();
  let latestEventDate = new Date(latestEvent.eventDate);
  if (tempDate > today) {
    if (latestEventDate > tempDate) {
      latestEvent = eventData[i];
    }
  }
}

function Countdown() {
  // Get the data of the event
  const deadline = new Date(latestEvent.eventDate);
  const event = latestEvent.eventName;

  // Countdown
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSec] = useState(0);

  setInterval(() => {
    const today = new Date();
    let tsec = (deadline.getTime() - today.getTime()) / 1000;
    if (tsec > 0) {
      setDays(
        Math.floor(tsec / 86400).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }),
      );
      setHours(
        Math.floor((tsec % 86400) / 3600).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }),
      );
      setMins(
        Math.floor((tsec % 3600) / 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }),
      );
      setSec(
        Math.floor(tsec % 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }),
      );
    } else {
    }
  }, 1000);

  if (days <= 0 && hours <= 0 && mins <= 0 && secs <= 0) {
    return (
      <div className="countdown confetti">
        <audio id="myAudio">
          <source src={confettiSound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="countdownObj">{event}</div>
        <div className="notcountdown">Event is happening Right Now!</div>
        <img
          className="confettiImg"
          id="confetti1"
          src={confettiImg1}
          alt="confetti img"
        />
        <img
          className="confettiImg"
          id="confetti2"
          src={confettiImg2}
          alt="confetti img"
        />
        <img
          className="confettiImg"
          id="confetti3"
          src={confettiImg3}
          alt="confetti img"
        />
      </div>
    );
  } else {
    return (
      <>
        <div className="countdown">
          <div className="countdownObj">
            <div className="dayshour">
              {days}:{hours}
            </div>
            <div className="minsec">
              {mins}:{secs}
            </div>
          </div>
          <div className="notcountdown">
            left for <br />
            {event}
            <br />
          </div>
          <img className="mouseimg" src={mouseImg} alt="mouse img" />
        </div>
      </>
    );
  }
}

export default Countdown;
