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
            memBut.style = "";
        }

    }
    return (
        <div className="aboutUs" id="aboutUs">
            <img className="parallaxEl" src={aboutUsImg} alt="" data-lerp="-15" />
            <div className="aboutUsContent">
                <div className="aboutUsText">
                    <div className="aboutUsTitle">About Us</div>
                    <p>
                        The KEC.IT.Club is a vibrant community of technology enthusiasts dedicated to empowering young innovative minds. The platform allows students to turn their ideas into reality, guided by the club's motto—Code, Create, and Connect. The club fosters innovation, creativity, and collaboration among the students. With a spirit of curiosity, the club has continually pushed its boundaries and ignited creativity at every stage of its journey toward a brighter, tech-driven future. KEC IT Club doesn’t just anticipate the future; it actively builds it with passion, precision, and purpose.

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
