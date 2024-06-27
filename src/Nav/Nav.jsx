import "./Nav.css";
import logo from "/logo.png";
import closeImg from "/close.png";
import aboutImg from "/info.png";
import contactImg from "/contact.png";
import eventsImg from "/events.png";
import { useState } from "react";

function Nav() {
  // Links
  // Hard defined vars
  let [navDisplay, setDisplay] = useState("hidden");

  return (
    <>
      <a href="/" className="logo">
        <img src={logo} />
      </a>
      <div className="NavOpener" onClick={(e) => setDisplay("popIn")}>
        <div className="hamburger top"></div>
        <div className="hamburger middle"></div>
        <div className="hamburger bottom"></div>
      </div>

      <div
        className={"navContainerContainer " + navDisplay}
        onMouseMove={(e) => {
          var wind_e = window.event;
          var width = document.documentElement.clientWidth;
          var height = document.documentElement.clientHeight;

          var posY = wind_e.clientY;
          var posX = wind_e.clientX;

          if (
            wind_e.clientY > height * 0.65 &&
            wind_e.clientY < height * 0.85
          ) {
            // For Events
            e.target.onmousedown = (e) => {
              location.href = "/events";
              setDisplay("hidden");
            };
            e.target.children[1].children[2].classList.add("navItemHover");
            e.target.children[1].children[1].classList.remove("navItemHover");
            e.target.children[1].children[0].classList.remove("navItemHover");
          } else if (
            wind_e.clientY < height * 0.35 &&
            wind_e.clientY > height * 0.15
          ) {
            // For About
            e.target.onmousedown = (e) => {
              location.href = "/#aboutUs";
              setDisplay("hidden");
            };
            e.target.children[1].children[0].classList.add("navItemHover");
            e.target.children[1].children[1].classList.remove("navItemHover");
            e.target.children[1].children[2].classList.remove("navItemHover");
          } else if (
            wind_e.clientY < height * 0.65 &&
            wind_e.clientY > height * 0.35
          ) {
            // For Contact
            e.target.onmousedown = (e) => {
              // lenis.scrollTo("#contactUs");
              location.href = "/#contactUs";
              setDisplay("hidden");
            };
            e.target.children[1].children[1].classList.add("navItemHover");
            e.target.children[1].children[0].classList.remove("navItemHover");
            e.target.children[1].children[2].classList.remove("navItemHover");
          } else {
            e.target.onmousedown = (e) => {
              setDisplay("hidden");
            };
            e.target.children[1].children[0].classList.remove("navItemHover");
            e.target.children[1].children[1].classList.remove("navItemHover");
            e.target.children[1].children[2].classList.remove("navItemHover");
          }

          var newCenter = [width / 2, height * 0.5];

          var diffFromCenter = [posX - newCenter[0], posY - newCenter[1]];
          e.target.children[1].children[0].style.transform = `rotateX(calc(${(diffFromCenter[1] / (0.75 * height)) * 90}deg + 45deg)) translate(-50%, -50%)`;
          e.target.children[1].children[1].style.transform = `rotateX(calc(${(diffFromCenter[1] / (0.75 * height)) * 90}deg + 0deg)) translate(-50%, -50%)`;
          e.target.children[1].children[2].style.transform = `rotateX(calc(${(diffFromCenter[1] / (0.75 * height)) * 90}deg + -45deg)) translate(-50%, -50%)`;
          e.target.children[1].style.top = `calc(-50% - ${diffFromCenter[1] * 0.75}px))`;
        }}
      >
        <div id="navDestroyer69">
          <img src={closeImg} alt="" />
        </div>
        <nav className="NavContainer">
          <div className="NavItems" id="about_nav">
            About Us
            <span className="NavItemIcons">
              <img src={aboutImg} alt="" />
            </span>
          </div>
          <div className="NavItems" id="contact_nav">
            Contact Us
            <span className="NavItemIcons">
              <img src={contactImg} alt="" />
            </span>
          </div>
          <div className="NavItems" id="events_nav">
            Events
            <span className="NavItemIcons">
              <img src={eventsImg} alt="" />
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
