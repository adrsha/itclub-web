import { useState, useEffect } from 'react';
import './Hackathon.css'

let EndTime = "Jan 9 25 00:00:00"

function Hackathon() {
    // Get the data of the event
    const deadline = new Date(EndTime);
    const event = "Hackathon Test";

    // Countdown
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMins] = useState(0);
    const [secs, setSec] = useState(0);
    let today = new Date();
    let time = (deadline.getTime() - today.getTime()) / 1000;
    let tsec = time < 61596237 ? time : null;

    function UpdateDate(tsec) {
        setDays(
            Math.floor(tsec / 86400).toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false,
            }),
        );
        setHours(
            Math.floor((tsec % 86400) / 3600).toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false,
            }),
        );
        setMins(
            Math.floor((tsec % 3600) / 60).toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false,
            }),
        );
        setSec(
            Math.floor(tsec % 60).toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false,
            }),
        );
    }
    useEffect(() => {
        UpdateDate(tsec);
        setInterval(() => {
            today = new Date();
            tsec = (deadline.getTime() - today.getTime()) / 1000;
            if (tsec > 0) {
                UpdateDate(tsec);
            }
        }, 1000);
    }, []);

    if (tsec > 0 && tsec != null) {
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
            time before
            <br />
              {event}
            <br />
          </div>
        </div>
        </>
    }
}

export default Countdown;
