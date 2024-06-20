/* eslint-disable react/prop-types */
import "./Cards.css";
import dummyImage from "/president.png";
import { useState } from "react";

function Cards(props) {
  const [MembersOpen, setMembersOpen] = useState("shorter");
  const [MembersCardState, setMembersCardState] = useState("Show More");
  if (props.id == "circleButtons") {
    return (
      <div className="glassCards glass parallaxEl" id={props.id}>
        <div className="cardTitle">{props.title}</div>
        <div className="cardContent">
          <a href={props.link1}>
            <button className="activated">{props.button1}</button>
          </a>
          <a href={props.link2}>
            <button className="deactivated">{props.button2}</button>
          </a>
        </div>
      </div>
    );
  } else if (props.id == "image") {
    return (
      <div className="glassCards" id={props.id}>
        <img src={props.src} />
      </div>
    );
  } else if (props.id == "MembersCard") {
    return (
      <div className={"glassCards glass parallaxEl"} id={props.id}>
        <div className="cardTitle">{props.title}</div>
        <div className={"membersList " + MembersOpen}>
          <div className="tablet" id="president_tablet">
            <img src={dummyImage} alt="" />
            {props.president}
            <div className="post">President</div>
          </div>
          <div className="tablet" id="vicePresident_tablet">
            <img src={dummyImage} alt="" />
            {props.vicePresident}
            <div className="post">Vice President</div>
          </div>
          <div className="tablet" id="secretary_tablet">
            <img src={dummyImage} alt="" />
            {props.secretary}
            <div className="post">Secretary</div>
          </div>
          <div className="tablet" id="member1_tablet">
            <img src={dummyImage} alt="" />
            {props.leadDesigner}
            <div className="post">Lead Designer</div>
          </div>
          <div className="tablet" id="member2_tablet">
            <img src={dummyImage} alt="" />
            {props.eventCoordinator}
            <div className="post">Event Coordinator</div>
          </div>
          <div className="tablet" id="member2_tablet">
            <img src={dummyImage} alt="" />
            {props.jointSecretary}
            <div className="post">Joint-Secretary</div>
          </div>
          <div className="tablet" id="member2_tablet">
            <img src={dummyImage} alt="" />
            {props.Developer}
            <div className="post">Developer</div>
          </div>
          <div className="tablet" id="member2_tablet">
            <img src={dummyImage} alt="" />
            {props.designer1}
            <div className="post">Designer</div>
          </div>
          <div className="tablet" id="member2_tablet">
            <img src={dummyImage} alt="" />
            {props.designer2}
            <div className="post">Designer</div>
          </div>
          <div className="tablet" id="member2_tablet">
            <img src={dummyImage} alt="" />
            {props.executiveMember1}
            <div className="post">Executive Member</div>
          </div>
          <div className="tablet" id="member2_tablet">
            <img src={dummyImage} alt="" />
            {props.executiveMember2}
            <div className="post">Executive Member</div>
          </div>
          <div className="tablet" id="member2_tablet">
            <img src={dummyImage} alt="" />
            {props.executiveMember3}
            <div className="post">Executive Member</div>
          </div>
          <div className="tablet" id="member2_tablet">
            <img src={dummyImage} alt="" />
            {props.executiveMember4}
            <div className="post">Executive Member</div>
          </div>
          <div className="tablet" id="member2_tablet">
            <img src={dummyImage} alt="" />
            {props.executiveMember5}
            <div className="post">Executive Member</div>
          </div>
          <div className="tablet" id="member2_tablet">
            <img src={dummyImage} alt="" />
            {props.executiveMember6}
            <div className="post">Executive Member</div>
          </div>
          <div className="tablet" id="member2_tablet">
            <img src={dummyImage} alt="" />
            {props.executiveMember7}
            <div className="post">Executive Member</div>
          </div>
        </div>

        <div
          className="tablet showMore"
          onClick={() => {
            if (MembersOpen == "shorter") {
              setMembersOpen("larger");
              setMembersCardState("Show Less");
            } else {
              setMembersOpen("shorter");
              setMembersCardState("Show More");
            }
          }}
        >
          {MembersCardState}
        </div>
      </div>
    );
  } else if (props.id == "Eventscard") {
    return (
      <div className="glassCards glass parallaxEl" id={props.id}>
        <div className="cardTitle">{props.title}</div>
        {props.description}
        <div className="showMore">more</div>
      </div>
    );
  }
  return (
    <div className="glassCards glass parallaxEl" id={props.id}>
      <div className="cardTitle">{props.title}</div>
      <div className="cardContent">{props.content}</div>
    </div>
  );
}

export default Cards;
