import React, { useEffect, useRef, useState } from "react";
import "./Dristi.css";

import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";
import Lines from "../Lines/Lines.jsx";
import { LenisComponent } from "../Lenis/Lenis.js";

import isMobile from "../ExtraFuncs.js";
import Parallax from "../Parallax/Parallax.js";

function DristiEvents(props) {
  const contentRef = useRef(null);
  let centerColStyle = {
    marginTop: "-5rem",
  };

  console.log(props);
  return (
    <>
      {isMobile() ? null : <Parallax />}
      <div
        className={
          "specialEventContent" +
          (props.column != Math.ceil(props.totalCols / 2) ? "" : " parallaxEl")
        }
        style={
          props.totalCols % 2 != 0
            ? props.column != Math.ceil(props.totalCols / 2)
              ? null
              : centerColStyle
            : null
          // props.column != Math.ceil(props.totalCols / 2) ? null : centerColStyle)}
        }
        ref={contentRef}
        data-lerp={
          props.totalCols % 2 != 0
            ? props.column == Math.ceil(props.totalCols / 2)
              ? 5
              : 0
            : 0
        }
      >
        {props.posterpath ? (
          <img className="specialEventContentImg" src={props.posterpath} />
        ) : (
          <img src="hello.png" />
        )}
        <div className="specialEventContentTitle">{props.name}</div>
        <div className="specialEventContentTime">{props.time}</div>
        <div className="specialEventsDesc">{props.desc}</div>
        <a href={props.formLinks}>
          {props.allowRegister ? (
            <button className="specialEventButton">Register</button>
          ) : (
            <button className="specialEventButton deactivated" disabled>
              Register
            </button>
          )}
        </a>
      </div>
    </>
  );
}

function EventsList() {
  const [columns, setColumns] = useState([]);
  const containerRef = useRef(null);

  const events = [
    {
      name: "Valorant Tournament",
      time: "Jan 9 - Jan 11",
      desc: "Valorant Esports Tournament is a competitive gaming event where participants battle in the popular tactical shooter game, Valorant. Players showcase their strategic thinking, teamwork, and gaming skills in high-energy matches.",
      posterpath: "/valo_poster.png",
      formLinks: "https://forms.gle/kAJgrJKzo7pv9g8MA",
      allowRegister: true,
    },
    {
      name: "PUBG Tournament",
      time: "Jan 10",
      desc: "PUBG Esports Tournament is a competitive gaming event where players compete in the intense battle royale game, PlayerUnknown's Battlegrounds (PUBG). Contestants demonstrate their tactical thinking, survival instincts, teamwork, and combat skills in high-stakes matches, vying for victory in this fast-paced and strategic environment",
      posterpath: "/pubg_poster.png",
      formLinks: "https://forms.gle/cZGutgnAXSChxQCMA",
      allowRegister: true,
    },
    {
      name: "Mobile Legends",
      time: "Jan 9 - Jan 11",
      desc: "Mobile Legends Tournament is a competitive gaming event where participants showcase their skills in the popular mobile MOBA game, Mobile Legends: Bang Bang. This tournament tests their teamwork, strategic thinking, and individual gameplay abilities under intense and fast-paced conditions.",
      posterpath: "/ML_post.png",
      formLinks: "https://forms.gle/V2zUpcCjAJc3KFNYA",
      allowRegister: true,
    },
    {
      name: "Projecct Demonstration",
      time: "Jan 9 - Jan 11",
      desc: "The Project Demonstration is a platform where participants showcase innovative projects, demonstrating their technical skills and creativity. This event highlights the latest advancements in overall development and provides a space for learning and inspiration.",
      posterpath: "/call_for_project_software.png",
      formLinks: "https://docs.google.com/forms/d/16cyqSta5w9aqd0XjonMzGfmtR2mWeRL43MaDYsa0IHo/edit",
      allowRegister: true,
    },
    // {
    //   name: "UI/UX Pre-event",
    //   time: "Jan 9",
    //   desc: "UI/UX Design Competition challenges participants to create user-friendly and visually appealing interfaces.",
    //   posterpath: "/UI_UX_poster_preevent.png",
    //   formLinks:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSfISjVz2FNHLMAUMJe-b9WT5B7HF5sSW_xjh9Bhc1lOg-rLhw/viewform?usp=dialog",
    //   allowRegister: false,
    // },
    {
      name: "UI/UX",
      time: "Jan 10",
      desc: "UI/UX Design Competition challenges participants to create user-friendly and visually appealing interfaces.",
      posterpath: "/UI_UX_poster.png",
      formLinks: "https://forms.gle/QtPWLMCMN4utRfQd6",
      allowRegister: false,
    },
    {
      name: "Hackathon",
      time: "Jan 9 - Jan 11",
      desc: "The Hackathon at Dristi 3.0 is a 48-hour event where teams will collaborate to develop innovative solutions to real-world challenges. Participants will work under time constraints, tackling problems related to AI, while receiving guidance from mentors.",
      posterpath: "/defaultPoster.png",
      formLinks: "#",
      allowRegister: false,
    },
    // {
    //   name: 'Quick Code',
    //   time: 'Everyday upto 50 Questions',
    //   desc: 'Quick Code and Win is a fast-paced competition where participants solve coding problems in real-time.',
    //   posterpath: '/defaultPoster.png',
    //   formLinks: '#',
    //   allowRegister: false,
    // },
    {
      name: "Competitive Coding",
      time: "Jan 10",
      desc: "Competitive Coding is a contest where participants solve complex coding problems within strict time limits. This event tests their problem-solving abilities, coding efficiency, and logical thinking.",
      posterpath: "/competitive_poster.png",
      formLinks: "https://forms.gle/V2zUpcCjAJc3KFNYA",
      allowRegister: false,
    },
  ];

  useEffect(() => {
    const updateLayout = () => {
      const container = containerRef.current;
      if (!container) return;
      const containerWidth = container.offsetWidth;
      const numColumns =
        containerWidth > 1200 ? 3 : containerWidth > 500 ? 2 : 1;
      const newColumns = Array(numColumns)
        .fill()
        .map(() => []);

      const middleColumn = Math.floor((numColumns - 1) / 2);
      const columnOrder = [middleColumn];

      // Add columns left to right after middle
      for (let i = 0; i < middleColumn; i++) {
        columnOrder.push(i);
      }
      for (let i = middleColumn + 1; i < numColumns; i++) {
        columnOrder.push(i);
      }

      events.forEach((event, index) => {
        const columnIndex = columnOrder[index % numColumns];
        newColumns[columnIndex].push(event);
      });
      setColumns(newColumns);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <div className="specialEventsList" ref={containerRef}>
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="masonry-column">
          {column.map((event, eventIndex) => (
            <DristiEvents
              key={eventIndex}
              name={event.name}
              time={event.time}
              desc={event.desc}
              posterpath={event.posterpath}
              column={columnIndex + 1}
              totalCols={columns.length}
              formLinks={event.formLinks}
              allowRegister={event.allowRegister}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Dristi() {
  const videoRef = useRef(null);
  const [vidPlaying, setVidPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    document.getElementById("root").classList.add("dristi");
    const video = videoRef.current;
    const updateProgress = () => {
      if (video) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };
    video?.addEventListener("timeupdate", updateProgress);
    return () => video?.removeEventListener("timeupdate", updateProgress);
  }, []);

  const getArcPath = (percentage) => {
    const radius = 45;
    const centerX = 50;
    const centerY = 50;
    const startAngle = -90;
    const endAngle = (percentage / 100) * 360 - 90;

    const start = {
      x: centerX + radius * Math.cos((startAngle * Math.PI) / 180),
      y: centerY + radius * Math.sin((startAngle * Math.PI) / 180),
    };

    const end = {
      x: centerX + radius * Math.cos((endAngle * Math.PI) / 180),
      y: centerY + radius * Math.sin((endAngle * Math.PI) / 180),
    };

    const largeArc = percentage > 50 ? 1 : 0;

    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
  };

  return (
    <>
      <Nav events contactUs aboutUs notices dristi />
      <Lines />
      <LenisComponent />
      {
        // isMobile() ? null : <Parallax />
      }
      <Parallax />
      <div className="specialEventHeader">
        Dristi 3.0
        <div className="specialEventsScroll">SCROLL DOWN</div>
      </div>
      <div className="affiliation">
        <div>
          <span data-text="In Collaboration">In Collaboration</span>
          <br />
          <span data-text="with">with</span>
        </div>
        <img src="logo_white.png" />
      </div>
      <div className="VODContainer">
        <video
          className="advertVideo"
          ref={videoRef}
          loop
          poster="/advertThumbnail.png"
          autoPlay="true"
          muted={isMuted}
        >
          <source src="/demo.mp4" type="video/mp4" />
        </video>
        <button
          className={
            vidPlaying ? "playButton parallaxEl" : "pauseButton parallaxEl"
          }
          onClick={() => {
            const video = videoRef.current;
            if (video.paused || video.ended) {
              video.play();
              setVidPlaying(true);
            } else {
              video.pause();
              setVidPlaying(false);
            }
          }}
          data-lerp={8}
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Progress Arc */}
            <path
              d={getArcPath(progress)}
              fill="none"
              stroke="#81BCE4"
              strokeWidth="2"
              opacity="1"
            />

            {vidPlaying ? (
              <>
                <path
                  d="M35,30 h10 a2,2 0 0 1 2,2 v36 a2,2 0 0 1 -2,2 h-10 a2,2 0 0 1 -2,-2 v-36 a2,2 0 0 1 2,-2 z"
                  fill="#2DAE8B"
                />
                <path
                  d="M55,30 h10 a2,2 0 0 1 2,2 v36 a2,2 0 0 1 -2,2 h-10 a2,2 0 0 1 -2,-2 v-36 a2,2 0 0 1 2,-2 z"
                  fill="#2DAE8B"
                />
              </>
            ) : (
              <>
                <path
                  d="M40,30 q0,-2 2,-2 l31,20 q2,1.5 0,3 l-31,20 q-2,1 -2,-1 z"
                  fill="#2270A5"
                />
              </>
            )}
          </svg>
        </button>
        <button
          className="muteButton parallaxEl glass-opti"
          onClick={() => {
            setIsMuted(!isMuted);
          }}
          data-lerp={8}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMuted ? (
              // Muted icon
              <path
                d="M11 5L6 9H2V15H6L11 19V5Z M23 9L17 15 M17 9L23 15"
                stroke="#81BCE4"
                strokeWidth="3"
                strokeLinecap="round"
              />
            ) : (
              // Unmuted icon
              <path
                d="M11 5L6 9H2V15H6L11 19V5Z M15 9C16.66 9 18 10.34 18 12C18 13.66 16.66 15 15 15"
                stroke="#81BCE4"
                strokeWidth="3"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <EventsList />
      <Footer />
    </>
  );
}
