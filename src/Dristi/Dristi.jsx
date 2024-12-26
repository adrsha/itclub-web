import "./Dristi.css";

import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";
import Lines from "../Lines/Lines.jsx";
import { LenisComponent } from "../Lenis/Lenis.js";

import isMobile from "../ExtraFuncs.js";
import Parallax from "../Parallax/Parallax.js";

export default function Dristi(params) {
    return (
        <>
            <Nav events contactUs aboutUs notices dristi/>
            <Lines />
            <LenisComponent />
            {isMobile() ? null : <Parallax />}
            <div className="pageContent">
                <div className="glassCards">
                </div>
            </div>
        </>
    );
}
