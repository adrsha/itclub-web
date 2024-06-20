import "./ContactUs.css";
import contactUsGraphics from "/contactUs_graphics.png";
export default function ContactUs() {
  return (
    <div className="contactUs" id="contactUs">
      <div className="contactUsTitle">Contact Us</div>
      <div className="contactUsContent">
        <div className="moreinfo">
          For more information and to stay updated on our activities, follow us
          on our social media channels and visit our website.
          <br />
          Email:kecktm.it.club@gmail.com
          <br />
          Follow us on Facebook, Twitter, and Instagram.
        </div>
        <form className="parallaxEl" action="submit">
          <div className="form_text">
            <input placeholder=" " type="text" id="name" name="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form_email">
            <input placeholder=" " type="email" id="email" name="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form_message">
            <textarea placeholder=" " id="message" name="message"></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit">Send</button>
        </form>
        <img
          className="parallaxEl"
          src={contactUsGraphics}
          alt="Contact Us graphics"
          data-lerp={-8}
        />
      </div>
    </div>
  );
}
