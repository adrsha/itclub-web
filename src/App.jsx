import Countdown from "./countdown/Countdown.jsx";
import Nav from "./Nav/Nav.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Footer from "./Footer/Footer.jsx";
import isMobile from "./ExtraFuncs.js";
import Parallax from "./Parallax/Parallax.js";
import Cards from "./Cards/Cards.jsx";
import "./App.css";
import "./Responsive/Responsive.css";
import "./Animations/Animations.css";
import posterImg from "/poster_AIML.png";
import notices from "../data/Notices.json";
import Lines from "./Lines/Lines.jsx";
import { LenisComponent } from "./Lenis/Lenis.js";

function App() {
  return (
    <>
      <Nav events contactUs aboutUs notices dristi/>
      <Lines />
      <LenisComponent />
      {isMobile() ? null : <Parallax />}
      <Countdown />
      <div className="pageContent" id="homePageContent">
        <Cards
          id="circleButtons"
          title="KEC IT Club"
          button1="About Us"
          link1="#aboutUs"
          button2="Contact Us"
          link2="#contactUs"
        />
        <Cards id="image" src={notices[0].posterImg ? notices[0].posterImg : "/defaultPoster.png"} /> 
        <Cards
          id="notice"
          title={notices[0].noticeHead}
          content={notices[0].noticeBody}
          button1="All Notices"
          buttonDiscord={notices[0].buttonDiscord}
          buttonForm={notices[0].buttonForm}
          link1="/notices"
          button2="All Events"
          link2="/events"
        />
        {
          // <Cards 
          // id="DetailCard"
          // description="Projects done inside as well as conducted by IT Club, via events and hackathons as well as selection procedures."
          // title="Our Projects"
          // button1="Learn More"
          // extraClass="projectDetailsCard"
          // link1="/projects"
          // button2="Explore"
          // link2="/events"
          // />
        }
      </div>
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
