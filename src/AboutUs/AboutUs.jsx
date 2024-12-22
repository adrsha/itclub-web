import "./AboutUs.css";
import member from "../../data/Members.json";
import kecImg from "/kec_peeps.jpg";
import aboutUsImg from "/about_us_graphics.png";
import Cards from "../Cards/Cards.jsx";

export default function AboutUs() {
    const cardProps = member.reduce((props, item) => {
        props[item.attr] = item.val;
        return props;
    }, {});

    let toggleMem = 0;
    function togglediv() {
        const memDiv = document.getElementById("MembersCard");
        const memBut = document.getElementById("membersButton");
        memDiv.classList.toggle("parallaxEl");
        // Toggle the visibility of the div
        if (toggleMem === 0) {
            memDiv.style.opacity = "1";
            toggleMem = 1;
                
            if (window.getComputedStyle(memDiv).getPropertyValue("position") == "fixed") {
                memBut.style.position = "fixed";
                memBut.style.bottom = "5vh";
                memBut.style.zIndex = "10";
            }
        } else {
            memDiv.style.opacity = "0";
            toggleMem = 0;
            memBut.style= "";
        }

    }
    return (
        <div className="aboutUs" id="aboutUs">
            <img className="parallaxEl" src={aboutUsImg} alt="" data-lerp="-15" />
            <div className="aboutUsContent">
                <div className="aboutUsText">
                    <div className="aboutUsTitle">About Us</div>
                    <p>
                        The KEC IT Club is a distinguished student organization at Kathmandu
                        Engineering College (KEC) dedicated to advancing computer technology
                        and IT education among its students. The club orchestrates a variety
                        of events, programs, and workshops designed to foster innovation,
                        skill development, and confidence in the realm of computers and
                        technology. It provides a dynamic platform for open discussions and
                        knowledge sharing, empowering students to explore their ideas and
                        excel in the field of computer technology.
                    </p>
                </div>
                <div className="membersToggle">
                    <a id="membersButton" onClick={togglediv}>
                        <button className="activated membersButtonText">Members</button>
                    </a>
                    <Cards id="MembersCard" {...cardProps} />
                </div>
            </div>
        </div>
    );
}
