import Countdown from "./countdown/Countdown.jsx";
import Nav from "./Nav/Nav.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Footer from "./Footer/Footer.jsx";
import Parallax from "./Parallax/Parallax.js";
import Cards from "./Cards/Cards.jsx";
import "./App.css";
import "./Responsive/Responsive.css";
import kecImg from "/kec_peeps.png";
import Lines from "./Lines/Lines.jsx";
import { LenisComponent } from "./Lenis/Lenis.js";
import LoadingPage from "./LoadingPage/LoadingPage.jsx";

function App() {
  return (
    <>
      <Nav />
      <Lines />
      <LenisComponent />
      <Parallax />
      <Countdown />
      <div className="pageContent">
        <Cards
          id="circleButtons"
          title="KEC IT Club"
          button1="About Us"
          link1="#aboutUs"
          button2="Contact Us"
          link2="#contactUs"
        />
        <Cards id="image" src={kecImg} />
        <Cards
          id="notice"
          title="New Notice!"
          content="Advanced Machine Learning is coming soon! Stay tuned for more information. We will be posting the details here soon."
          button1="View All Notices"
          link1="/notices"
        />
        <Cards
          id="DetailCard"
          description="Projects done inside as well as conducted by IT Club, via events and hackathons as well as selection procedures."
          title="Our Projects"
          button1="Learn More"
          extraClass="projectDetailsCard"
          link1="#events"
          button2="Explore"
          link2="#events"
        />
      </div>
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
