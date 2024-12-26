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
            <div className="specialEventsDesc moreinfo">
                {props.desc}
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
                    desc = "The Hackathon at Dristi 3.0 is a 48-hour event where teams will collaborate to develop innovative solutions to real-world challenges. Participants will work under time constraints, tackling problems related to AI, while receiving guidance from mentors. The projects will be judged on innovation, feasibility, impact, scalability, and presentation. Teams will have the chance to win prizes, including cash rewards and internship opportunities. This event offers participants a chance to showcase their skills, learn from industry professionals, and gain exposure to potential career opportunities."
                />
                <DristiEvents
                    name="Quick Code"
                    time="Quick Code is an everyday event."
                    desc = "Quick Code and Win is a fast-paced competition where participants solve coding problems in real-time. The event challenges participants to showcase their programming agility and problem-solving skills under time pressure. It’s an exciting opportunity for coders to demonstrate their abilities, compete for prizes, and test their skills in a dynamic environment."
                />
                <DristiEvents
                    name="Competitive Coding"
                    time="Competitive Coding is a 7-8 hours event, held in day 2 of Dristi."
                    desc = "Competitive Coding is a contest where participants solve complex coding problems within strict time limits. This event tests their problem-solving abilities, coding efficiency, and logical thinking. It’s an exciting opportunity for participants to compete under pressure, demonstrating their technical expertise while striving for the top positions and prizes."
                />
                <DristiEvents
                    name="UI/UX"
                    time="UI/UX is a 6-7 hours event, held in day 2 of Dristi."
                    desc = "UI/UX Design Competition challenges participants to create user-friendly and visually appealing interfaces. The focus is on blending aesthetics with functionality to enhance the overall user experience. It’s an opportunity for designers to showcase their creativity and technical skills while developing intuitive digital solutions."
                />
                <DristiEvents
                    name="Valorant Tournament"
                    time="Valorant tournament is starts from day 1 of Dristi."
                    desc = "Valorant Esports Tournament is a competitive gaming event where participants battle in the popular tactical shooter game, Valorant. Players showcase their strategic thinking, teamwork, and gaming skills in high-energy matches. It’s an exciting opportunity for gamers to compete, win prizes, and demonstrate their expertise in a fast-paced esports environment."
                />
                <DristiEvents
                    name="PUBG Tournament"
                    time="PUBG tournament is held in day 2 of Dristi."
                    desc = "PUBG Esports Tournament is a competitive gaming event where participants compete in the battle royale game, PUBG. Players use strategy, teamwork, and survival skills to outlast opponents in intense, fast-paced matches. It’s a thrilling opportunity for gamers to showcase their skills, compete for prizes, and experience the excitement of high-stakes gameplay."
                />
                <DristiEvents
                    name="Mobile Legends: Bang Bang"
                    time="Mobile legends tournament is held in day 2 of Dristi."
                    desc = "**Mobile Legends: Bang Bang (MLBB) Esports Tournament** is a competitive gaming event where participants compete in the popular multiplayer online battle arena game. Teams work together to strategize, execute tactics, and defeat their opponents in fast-paced, action-packed matches. It’s an exciting opportunity for players to showcase their teamwork and gaming skills while competing for prizes."
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
