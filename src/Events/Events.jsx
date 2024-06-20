import eventGraphic from "/events_bg.png";
import Cards from "../Cards/Cards";
import Parallax from "../Parallax/Parallax";
import eventData from "/Dristi-From-Scratch/data/Events.json";
import Lines from "../Lines/Lines.jsx";
import { LenisComponent } from "../Lenis/Lenis.js";
import "./Events.css";

let eventHtml = eventData.map((ev) => {
  if (ev.id % 2 === 0) {
    return (
      <div key={ev.id} className="Eventlists">
        <div className="emptyspace"></div>
        <Cards
          id="Eventscard"
          title={ev.eventName}
          description={ev.eventDescription}
          date={ev.eventDate}
        />
      </div>
    );
  } else {
    return (
      <div key={ev.id} className="Eventlists">
        <Cards
          id="Eventscard"
          title={ev.eventName}
          description={ev.eventDescription}
        />
        <div className="emptyspace"></div>
      </div>
    );
  }
});

function Events() {
  return (
    <>
      <LenisComponent />
      <Parallax />
      <Lines />

      <div className="events">
        <div className="eventImage">
          <img src={eventGraphic} alt="" />
        </div>

        <div className="eventTitle">Our Events</div>
        <div className="eventContent">{eventHtml}</div>
      </div>
    </>
  );
}
export default Events;
