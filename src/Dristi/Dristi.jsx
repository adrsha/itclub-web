import "./Dristi.css";

import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";
import Lines from "../Lines/Lines.jsx";
import { LenisComponent } from "../Lenis/Lenis.js";

import isMobile from "../ExtraFuncs.js";
import Parallax from "../Parallax/Parallax.js";

import {useEffect, useState} from "react";

function DristiEvents(props){
    return (
        <div className="specialEventContent">
            <div className="specialEventContentTitle">{props.name}</div>
            <div className="moreinfo">
                {props.time}
            </div>
        </div>
    )
}



export default function Dristi(params) {
    const [currentEvent, setCurrentEvent] = useState(0);
    const events = ["Hackathon", "Quick Code", "Competitive Coding", "UI/UX", "Valorant Tournament", "PUBG Tournament", "Mobile Legends: Bang Bang"];
    useEffect(() => {
        document.getElementById("root").classList.add("dristi");
    },[])

    return (
        <div id="specialEventRoot">
            <Nav events contactUs aboutUs notices dristi/>
            <Lines />
            <LenisComponent />
            {isMobile() ? null : <Parallax />}
            <div className="specialEventHeader">
                Dristi 3.0
            </div>

            <div className="specialEventsSubHeader">IT Club Events</div>
            <div className="specialEventsList" style={{ transform: `translateX(${-currentEvent*50}vw)`}}>
                <DristiEvents
                    name="Hackathon"
                    time="Hackathon is a 48 hours event, held in day 1 and 2 of Dristi."
                />
                <DristiEvents
                    name="Quick Code"
                    time="Quick Code is an everyday event."
                />
                <DristiEvents
                    name="Competitive Coding"
                    time="Competitive Coding is a 7-8 hours event, held in day 2 of Dristi."
                />
                <DristiEvents
                    name="UI/UX"
                    time="UI/UX is a 6-7 hours event, held in day 2 of Dristi."
                />
                <DristiEvents
                    name="Valorant Tournament"
                    time="Valorant tournament is starts from day 1 of Dristi."
                />
                <DristiEvents
                    name="PUBG Tournament"
                    time="PUBG tournament is held in day 2 of Dristi."
                />
                <DristiEvents
                    name="Mobile Legends: Bang Bang"
                    time="Mobile legends tournament is held in day 2 of Dristi."
                />
            </div>
            <div className="specialEventSwitcher">
                <button className="prevEvent" onClick={ ()=>{
                    if (currentEvent == 0){
                        setCurrentEvent(Math.floor(events.length - 2));
                    } else {
                        setCurrentEvent(prevCurrentEvent => (prevCurrentEvent-1));
                    }
                } }></button>
                <button className="nextEvent" onClick={ ()=>{
                    if (currentEvent == Math.floor(events.length - 1)){
                        setCurrentEvent(0);
                    } else {
                        setCurrentEvent(prevCurrentEvent => (prevCurrentEvent+1));
                    }
                } }></button>
            </div>
            <Footer />
        </div>
    );
}
