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
      <div className="specialEventContent" ref={contentRef}>

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
      name: 'Hackathon',
      time: '48 hours event, from Day 1 to Day 2',
      desc: 'The Hackathon at Dristi 3.0 is a 48-hour event where teams will collaborate to develop innovative solutions to real-world challenges. Participants will work under time constraints, tackling problems related to AI, while receiving guidance from mentors.',
      posterpath: '/defaultPoster.png',
    },
    {
      name: 'Quick Code',
      time: 'Quick Code is an everyday event.',
      desc: 'Quick Code and Win is a fast-paced competition where participants solve coding problems in real-time.',
      posterpath: '/defaultPoster.png',
    },
    {
      name: 'Competitive Coding',
      time: 'Competitive Coding is a 7-8 hours event, held in day 2 of Dristi.',
      desc: 'Competitive Coding is a contest where participants solve complex coding problems within strict time limits. This event tests their problem-solving abilities, coding efficiency, and logical thinking.',
      posterpath: '/defaultPoster.png',
    },
    {
      name: 'UI/UX',
      time: 'UI/UX is a 6-7 hours event, held in day 2 of Dristi.',
      desc: 'UI/UX Design Competition challenges participants to create user-friendly and visually appealing interfaces.',
      posterpath: '/defaultPoster.png',
    },
    {
      name: 'Valorant Tournament',
      time: 'Valorant tournament starts from day 1 of Dristi.',
      desc: 'Valorant Esports Tournament is a competitive gaming event where participants battle in the popular tactical shooter game, Valorant. Players showcase their strategic thinking, teamwork, and gaming skills in high-energy matches.',
      posterpath: '/defaultPoster.png',
    },
  ];

  useEffect(() => {
    const updateLayout = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const numColumns = containerWidth > 768 ? 3 : 1;

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
    <div id="specialEventRoot">
      <Nav events contactUs aboutUs notices dristi />
      <Lines />
      <LenisComponent />
      {isMobile() ? null : <Parallax />}
      <div className="specialEventHeader">Dristi 3.0</div>
      <div className="specialEventsSubHeader">IT Club Events</div>
      <EventsList />
      <Footer />
    </div>
  );
}
