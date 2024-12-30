import React, { useEffect, useRef, useState } from 'react';
import './Dristi.css';

import Nav from '../Nav/Nav.jsx';
import Footer from '../Footer/Footer.jsx';
import Lines from '../Lines/Lines.jsx';
import { LenisComponent } from '../Lenis/Lenis.js';

import isMobile from '../ExtraFuncs.js';
import Parallax from '../Parallax/Parallax.js';

function DristiEvents(props) {
  const contentRef = useRef(null);

  return (
    <>
      {isMobile() ? null : <Parallax />}
      <div
        className="specialEventContent parallaxEl"
        ref={contentRef}
          data-lerp={props.totalCols % 2 != 0 ? (props.column == Math.ceil(props.totalCols/2) ? (props.column * 10):-15) : 5}
      >
        {props.posterpath ? (
          <img className="specialEventContentImg" src={props.posterpath} />
        ) : (
          <img src="hello.png" />
        )}
        <div className="specialEventContentTitle">{props.name}</div>
        <div className="specialEventContentTime">{props.time}</div>
        <div className="specialEventsDesc">{props.desc}</div>
      </div>
    </>
  );
}

function EventsList() {
  const [columns, setColumns] = useState([]);
  const containerRef = useRef(null);

  const events = [
    {
      name: 'UI/UX',
      time: ' 6-7 hours event, Day 2',
      desc: 'UI/UX Design Competition challenges participants to create user-friendly and visually appealing interfaces.',
      posterpath: '/UI_UX_poster.png',
    },
    {
      name: 'Valorant Tournament',
      time: 'Day 1-3',
      desc: 'Valorant Esports Tournament is a competitive gaming event where participants battle in the popular tactical shooter game, Valorant. Players showcase their strategic thinking, teamwork, and gaming skills in high-energy matches.',
      posterpath: '/valo_poster.png',
    },
    {
      name: 'PUBG Tournament',
      time: 'Day 2',
      desc: 'PUBG Esports Tournament is a competitive gaming event where players compete in the intense battle royale game, PlayerUnknown\'s Battlegrounds (PUBG). Contestants demonstrate their tactical thinking, survival instincts, teamwork, and combat skills in high-stakes matches, vying for victory in this fast-paced and strategic environment',
      posterpath: '/pubg_poster.png',
    },
    {
      name: 'Hackathon',
      time: '48 hours event, Day 1 - Day 2',
      desc: 'The Hackathon at Dristi 3.0 is a 48-hour event where teams will collaborate to develop innovative solutions to real-world challenges. Participants will work under time constraints, tackling problems related to AI, while receiving guidance from mentors.',
      posterpath: '/defaultPoster.png',
    },
    {
      name: 'Quick Code',
      time: 'Everyday upto 50 Questions',
      desc: 'Quick Code and Win is a fast-paced competition where participants solve coding problems in real-time.',
      posterpath: '/defaultPoster.png',
    },
    {
      name: 'Competitive Coding',
      time: '7-8 hours event, Day 2',
      desc: 'Competitive Coding is a contest where participants solve complex coding problems within strict time limits. This event tests their problem-solving abilities, coding efficiency, and logical thinking.',
      posterpath: '/defaultPoster.png',
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
        .map(() => []); // make an array for each elements
      events.forEach((event, index) => {
        const columnIndex = index % numColumns;
        newColumns[columnIndex].push(event);
      });

      setColumns(newColumns);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);

    return () => window.removeEventListener('resize', updateLayout);
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
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Dristi() {
  useEffect(() => {
    document.getElementById('root').classList.add('dristi');
  }, []);

  return (
    <>
      <Nav events contactUs aboutUs notices dristi />
      <Lines />
      <LenisComponent />
      {isMobile() ? null : <Parallax />}
      <div className="specialEventHeader">Dristi 3.0</div>
      <div className="specialEventsSubHeader">IT Club Events</div>
      <EventsList />
      <Footer />
    </>
  );
}
