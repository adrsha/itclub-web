import "./Nav.css";
import logo from "/logo.png";
import closeImg from "/close.png";
import aboutImg from "/info.png";
import contactImg from "/contact.png";
import eventsImg from "/events.png";
import { useState, useEffect } from "react";

function Nav() {
  // Links
  // Hard defined vars
  let [navStyle, setnavStyle] = useState({});
  let [navDisplay, setDisplay] = useState("hidden");

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 90) {
      setnavStyle({
        top: "10px",
        position: "fixed",
        height: "2rem",
      });
    } else {
      setnavStyle({});
    }
  };

  return (
    <>
      <a href="/Dristi-From-Scratch/">
        <img src={logo} className="logo" />
      </a>
      <div
        className="NavOpener"
        onClick={(e) => setDisplay("popIn")}
        style={navStyle}
      >
        <svg viewBox="0 0 75 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.5359 37C18.0755 34.3333 21.9245 34.3333 23.4641 37L33.8564 55C35.396 57.6667 33.4715 61 30.3923 61H9.6077C6.5285 61 4.60399 57.6667 6.14359 55L16.5359 37Z"
            fill="#80BBE4"
          />
          <path
            d="M50.8564 37C52.396 34.3333 56.245 34.3333 57.7846 37L68.1769 55C69.7165 57.6667 67.792 61 64.7128 61H43.9282C40.849 61 38.9245 57.6667 40.4641 55L50.8564 37Z"
            fill="#80BBE4"
          />
          <path
            d="M33.5359 6C35.0755 3.33334 38.9245 3.33333 40.4641 6L50.8564 24C52.396 26.6667 50.4715 30 47.3923 30H26.6077C23.5285 30 21.604 26.6667 23.1436 24L33.5359 6Z"
            fill="#80BBE4"
          />
        </svg>
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
              location.href = "/Dristi-From-Scratch/events";
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
              location.href = "/Dristi-From-Scratch/#aboutUs";
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
              location.href = "/Dristi-From-Scratch/#contactUs";
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
