import "./AboutUs.css";
import member from "../../data/Members.json";
import aboutUsImg from "/about_us.png";
import Cards from "../Cards/Cards.jsx";

export default function AboutUs() {
  const cardProps = member.reduce((props, item) => {
    props[item.attr] = item.val;
    return props;
  }, {});
  return (
    <div className="aboutUs" id="aboutUs">
      <img className="parallaxEl" src={aboutUsImg} alt="" data-lerp="-15" />
      <div className="aboutUsContent">
        <div className="aboutUsText">
          <div className="aboutUsTitle">About Us</div>
          <p>
            At Kathmandu Engineering College (KEC), the KEC IT Club is a vibrant
            group of tech enthusiasts committed to promoting an innovative and
            high-achieving culture in the field of information technology.
            Students may explore, learn, and succeed in a variety of technology
            disciplines through our club.
          </p>
          <p>
            We are dedicated to providing high-quality education and resources
            to our community. We believe that education is the key to unlocking
            the potential of individuals and communities. We work hard to ensure
            that our community has access to the best resources and
            opportunities for learning and growth.
          </p>
          <p>
            For more information and to stay updated on our activities, follow
            us on our social media channels and visit our website. Contact Us
            Email:kecktm.it.club@gmail.com Follow us on Facebook, Twitter, and
            Instagram.
          </p>
        </div>
        <Cards id="MembersCard" {...cardProps} />
      </div>
    </div>
  );
}
