import Nav from "../Nav/Nav.jsx";
import Lines from "../Lines/Lines.jsx";
import "./Sumbitted.css";

export default function Submitted() {
  return (
    <>
      <Nav />
      <Lines />
      <div className="submitted">
        <h1>Your submission has been received!</h1>
        <p>
          We will be in touch with you soon. Thank you for your interest in our
          projects.
        </p>
        <a className="specialLinks" href="/">
          Go back to the homepage
        </a>
      </div>
    </>
  );
}
