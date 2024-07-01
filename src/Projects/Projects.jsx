import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Parallax from "../Parallax/Parallax";
import projectData from "../../data/Projects.json";
import Lines from "../Lines/Lines.jsx";
import { LenisComponent } from "../Lenis/Lenis.js";
import "./Projects.css";

let projectHtml = projectData.map((pr) => {
  if (pr.id % 2 === 0) {
    return (
      <div key={pr.id} className="Eventlists">
        <div className="emptyspace"></div>
        <Cards
          id="DetailCard"
          title={pr.projectName}
          description={pr.projectDescription}
          date={pr.projectDate}
          button1="Visit Page"
          button2="Learn More"
        />
      </div>
    );
  } else {
    return (
      <div key={pr.id} className="Eventlists">
        <Cards
          id="DetailCard"
          title={pr.projectName}
          button1="Visit Page"
          button2="Learn More"
          description={pr.projectDescription}
        />
        <div className="emptyspace"></div>
      </div>
    );
  }
});

function Events() {
  return (
    <>
      <Nav home notices />
      <Lines />
      <LenisComponent />
      <Parallax />
      <div className="eventTitle">Our Projects</div>
      <div className="events">
        <div className="eventContent">{projectHtml}</div>
      </div>
      <Footer />
    </>
  );
}
export default Events;
