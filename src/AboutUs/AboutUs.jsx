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
            We are committed to providing a supportive and inclusive environment
            for all members of our community. We believe that everyone should
            feel valued and respected, regardless of their background or
            experience. We strive to create a welcoming and inclusive space
            where everyone can feel comfortable sharing their ideas and
            opinions.
          </p>
          <p>
            We are dedicated to providing high-quality education and resources
            to our community. We believe that education is the key to unlocking
            the potential of individuals and communities. We work hard to ensure
            that our community has access to the best resources and
            opportunities for learning and growth.
          </p>
          <p>
            We are committed to promoting diversity and inclusion in our
            community. We believe that everyone should have the opportunity to
            learn and grow, regardless of their background or identity. We work
            hard to create a welcoming and inclusive environment where everyone
            feels valued and respected.
          </p>
          <p>
            We are dedicated to providing a safe and welcoming space for all
            members of our community. We believe that everyone should feel
            comfortable sharing their ideas and opinions. We work hard to ensure
            that our community has access to the best resources and
            opportunities for learning and growth.
          </p>
          <p>
            Our goal is to create a creative, cooperative atmosphere where
            students may improve their technical abilities, obtain real-world
            experience, and be ready for lucrative professions in the
            engineering sector. With various programmes and events, we aim to
            close the gap between industrial demands and academic learning.
          </p>
          <p>
            For more information and to stay updated on our activities, follow
            us on our social media channels and visit our website. Contact Us
            Email:kecktm.it.club@gmail.com Follow us on Facebook, Twitter, and
            Instagram.
          </p>
        </div>
        <Cards id="MembersCard" title="Our Members" {...cardProps} />
      </div>
    </div>
  );
}
