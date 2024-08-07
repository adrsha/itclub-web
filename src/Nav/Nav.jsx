import "./Nav.css";
import logo from "/logo.png";
import closeImg from "/close.png";
import aboutImg from "/about_us.png";
import contactImg from "/contact.png";
import eventsImg from "/events.png";
import noticeImg from "/notice.png";
import { useState, useEffect } from "react";
import { lenis } from "../Lenis/Lenis.js";
import isMobile from "../ExtraFuncs.js";

function Nav(props) {
  useEffect(() => {
    function setCirclePts(element, noOfChildren, radius, changeInAngle) {
      var angleDisp = Math.PI / 2;
      for (let i = 0; i < noOfChildren; i++) {
        var l =
          (((Math.PI - angleDisp) * radius) / (noOfChildren + 1)) * i + radius;
        var angle_error = l / (2 * radius) + angleDisp / 2;
        var thita = l / radius;
        var yTransform =
          radius - radius * Math.cos(thita + angle_error + changeInAngle);
        var zTransform =
          radius - radius * Math.sin(2 * thita + angle_error + changeInAngle);
        element.children[i].style.top = `${yTransform}px`;
        element.children[i].style.transform =
          `rotateX(${Math.PI / 2 - thita - angle_error - changeInAngle}rad) translate(-50%, -50%) translateX(-${zTransform / 5}px)`;
      }
    }

    const navContainerContainer = document.getElementById(
      "navContainerContainer",
    );
    var height = window.innerHeight;
    var noOfChildren = navContainerContainer.children[1].children.length;
    if (!isMobile()) {
      setCirclePts(
        navContainerContainer.children[1],
        noOfChildren,
        height / 2,
        -(100 / height) * 2.5,
      );
    }

    const hoverFunction = (navContainerContainer) => {
      var wind_e = window.event;
      if (!isMobile()) {
        var posY = wind_e.clientY;
        var radius = height / 2;
        setCirclePts(
          navContainerContainer.children[1],
          noOfChildren,
          radius,
          -(posY / height) * 2.5,
        );
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
          {Object.prototype.hasOwnProperty.call(props, "home") ? (
            <a href="/" className="NavItems" id="events_nav">
              Home
              <span className="NavItemIcons glass">
                <img src={eventsImg} alt="" />
              </span>
            </a>
          ) : null}

          {Object.prototype.hasOwnProperty.call(props, "aboutUs") ? (
            <a
              onMouseDown={(e) => {
                e.preventDefault();
                lenis.scrollTo("#aboutUs");
                setDisplay("hidden");
              }}
              className="NavItems"
              id="about_nav"
            >
              About Us
              <span className="NavItemIcons glass">
                <img src={aboutImg} alt="" />
              </span>
            </a>
          ) : null}
          {Object.prototype.hasOwnProperty.call(props, "contactUs") ? (
            <a
              onMouseDown={(e) => {
                e.preventDefault();
                lenis.scrollTo("#contactUs");
                setDisplay("hidden");
              }}
              className="NavItems"
              id="contact_nav"
            >
              Contact Us
              <span className="NavItemIcons glass">
                <img src={contactImg} alt="" />
              </span>
            </a>
          ) : null}

          {Object.prototype.hasOwnProperty.call(props, "events") ? (
            <a href="/events" className="NavItems" id="events_nav">
              Events
              <span className="NavItemIcons glass">
                <img src={eventsImg} alt="" />
              </span>
            </a>
          ) : null}
          {Object.prototype.hasOwnProperty.call(props, "notices") ? (
            <a href="/notices" className="NavItems" id="events_nav">
              Notices
              <span className="NavItemIcons glass">
                <img src={noticeImg} alt="" />
              </span>
            </a>
          ) : null}
        </nav>
      </div>
    </>
  );
}

export default Nav;
