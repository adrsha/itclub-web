import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Parallax from "../Parallax/Parallax";
import noticeData from "../../data/Notices.json";
import eventData from "../../data/Events.json";
import Lines from "../Lines/Lines.jsx";
import { LenisComponent } from "../Lenis/Lenis.js";
import "./EditData.css";

function Events() {
  return (
    <>
      <Nav home events />
      <Lines />
      <LenisComponent />
      <Parallax />
      <Footer />
    </>
  );
}
export default Events;
