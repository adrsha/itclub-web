import "./Nav.css";
import logo from "/logo.png";
import closeImg from "/close.png";
import aboutImg from "/info.png";
import contactImg from "/contact.png";
import eventsImg from "/events.png";
import { useState, useEffect } from "react";
import { lenis } from "../Lenis/Lenis.js";
import isMobile from "../ExtraFuncs.js";

function Nav() {
  // Links
  // Hard defined vars
  useEffect(() => {
    const navContainerContainer = document.getElementById(
      "navContainerContainer",
    );
    const hoverFunction = (navContainerContainer) => {
      if (!isMobile()) {
        var wind_e = window.event;
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;

        var posY = wind_e.clientY;
        var posX = wind_e.clientX;

        if (wind_e.clientY > height * 0.65 && wind_e.clientY < height * 0.85) {
          console.log(isMobile());
          navContainerContainer.children[1].children[2].classList.add(
            "navItemHover",
          );
          navContainerContainer.children[1].children[1].classList.remove(
            "navItemHover",
          );
          navContainerContainer.children[1].children[0].classList.remove(
            "navItemHover",
          );
        } else if (
          wind_e.clientY < height * 0.35 &&
          wind_e.clientY > height * 0.15
        ) {
          navContainerContainer.children[1].children[0].classList.add(
            "navItemHover",
          );
          navContainerContainer.children[1].children[1].classList.remove(
            "navItemHover",
          );
          navContainerContainer.children[1].children[2].classList.remove(
            "navItemHover",
          );
        } else if (
          wind_e.clientY < height * 0.65 &&
          wind_e.clientY > height * 0.35
        ) {
          navContainerContainer.children[1].children[1].classList.add(
            "navItemHover",
          );
          navContainerContainer.children[1].children[0].classList.remove(
            "navItemHover",
          );
          navContainerContainer.children[1].children[2].classList.remove(
            "navItemHover",
          );
        } else {
          navContainerContainer.children[1].children[0].classList.remove(
            "navItemHover",
          ); // *required to Un-hover these fuckers
          navContainerContainer.children[1].children[1].classList.remove(
            "navItemHover",
          );
          navContainerContainer.children[1].children[2].classList.remove(
            "navItemHover",
          );
        }
        var newCenter = [width / 2, height * 0.5];

        var diffFromCenter = [posX - newCenter[0], posY - newCenter[1]];
        navContainerContainer.children[1].children[0].style.transform = `rotateX(calc(${(diffFromCenter[1] / (0.75 * height)) * 90}deg + 45deg)) translate(-50%, -50%)`;
        navContainerContainer.children[1].children[1].style.transform = `rotateX(calc(${(diffFromCenter[1] / (0.75 * height)) * 90}deg + 0deg)) translate(-50%, -50%)`;
        navContainerContainer.children[1].children[2].style.transform = `rotateX(calc(${(diffFromCenter[1] / (0.75 * height)) * 90}deg + -45deg)) translate(-50%, -50%)`;
        navContainerContainer.children[1].style.top = `calc(-50% - ${diffFromCenter[1] * 0.75}px))`;
      }
    };

    navContainerContainer.addEventListener("mousemove", () =>
      hoverFunction(navContainerContainer),
    );
  }, []);
  let [navDisplay, setDisplay] = useState("hidden");

  return (
    <>
      <a href="/" className="logo">
        <img src={logo} />
      </a>
      <div className="NavOpener" onClick={() => setDisplay("popIn")}>
        <div className="hamburger top"></div>
        <div className="hamburger middle"></div>
        <div className="hamburger bottom"></div>
      </div>

      <div
        className={"navContainerContainer " + navDisplay}
        id="navContainerContainer"
      >
        <div id="navDestroyer69" onMouseDown={() => setDisplay("hidden")}>
          <img src={closeImg} alt="" />
        </div>
        <nav className="NavContainer">
          <a
            onMouseDown={(e) => {
              e.preventDefault();
              lenis.scrollTo("#aboutUs");
            }}
            className="NavItems"
            id="about_nav"
          >
            About Us
            <span className="NavItemIcons glass">
              <img src={aboutImg} alt="" />
            </span>
          </a>
          <a
            onMouseDown={(e) => {
              e.preventDefault();
              lenis.scrollTo("#contactUs");
            }}
            className="NavItems"
            id="contact_nav"
          >
            Contact Us
            <span className="NavItemIcons glass">
              <img src={contactImg} alt="" />
            </span>
          </a>
          <a href="/events" className="NavItems" id="events_nav">
            Events
            <span className="NavItemIcons glass">
              <img src={eventsImg} alt="" />
            </span>
          </a>
        </nav>
      </div>
    </>
  );
}

export default Nav;
