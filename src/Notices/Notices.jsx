import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Parallax from "../Parallax/Parallax";
import noticeData from "../../data/Notices.json";
import Lines from "../Lines/Lines.jsx";
import { LenisComponent } from "../Lenis/Lenis.js";
import "./Notices.css";

let noticesHtml = noticeData.map((noti) => {
  if (noti.id % 2 === 0) {
    return (
      <div key={noti.id} className="Eventlists">
        <div className="emptyspace"></div>
        <Cards
          id="DetailCard"
          title={noti.noticeHead}
          description={noti.noticeBody}
          button1="View Events"
          button2="Learn More"
        />
      </div>
    )
  } else {
    return (
      <div key={noti.id} className="Eventlists">
        <Cards
          id="DetailCard"
          title={noti.noticeHead}
          description={noti.noticeBody}
          button1="View Events"
          button2="Learn More"
          link1="/events"
          link2="/#contactUs"
        />
        <div className="emptyspace"></div>
      </div>
    );
  }
});

function Events() {
  return (
    <>
      <Nav home events />
      <Lines />
      <LenisComponent />
      <Parallax />
      <div className="eventTitle">Notices!!</div>
      <div className="events">
        <div className="eventContent">{noticesHtml}</div>
      </div>
      <Footer />
    </>
  );
}
export default Events;
