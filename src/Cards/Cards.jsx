/* eslint-disable react/prop-types */
import "./Cards.css";
import member from "../../data/Members.json";
import dummyImage from "/president.png";
import { useState } from "react";

let cardHtml = member.map((mv) => {
  return (
    <div key={mv.attr} className="tablet" id={mv.attr}>
      <img src={dummyImage} alt="" />
      {mv.val}
      <div className="post">{mv.post}</div>
    </div>
  );
});
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
      <div className={"glassCards glass parallaxEl"} id="MembersCard">
        <div className="cardTitle">{props.title}</div>
        <div className={"membersList " + MembersOpen}>{cardHtml}</div>
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
        <div className="cardData">
          <div className="cardTitle">{props.title}</div>
          {props.description}
          <div className="showMore">See more</div>
        </div>
        <hr />
        <div className="cardActions">
          <button className="activated">Roll In</button>
          <button className="deactivated">Learn More</button>
        </div>
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
