import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Parallax from "../Parallax/Parallax";
import eventData from "../../data/Events.json";
import Lines from "../Lines/Lines.jsx";
import { LenisComponent } from "../Lenis/Lenis.js";
import "./Events.css";

let eventHtml = eventData.map((ev) => {
  if (ev.id % 2 === 0) {
    return (
      <div key={ev.id} className="Eventlists">
        <div className="emptyspace"></div>
        <Cards
          id="DetailCard"
          title={ev.eventName}
          description={ev.eventDescription}
          date={ev.eventDate}
          button1="Roll In"
          button2="Learn More"
        />
      </div>
    );
  } else {
    return (
      <div key={ev.id} className="Eventlists">
        <Cards
          id="DetailCard"
          title={ev.eventName}
          button1="Roll In"
          button2="Learn More"
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
      <Nav />
      <Lines />
      <LenisComponent />
      <Parallax />
      <div className="eventTitle">Our Events</div>
      <div className="events">
        <div className="eventContent">{eventHtml}</div>
      </div>
      <Footer />
    </>
  );
}
export default Events;
