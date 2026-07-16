import "../styles/AboutMe.css";

import aboutBg from "../assets/about-bg.png";
import profile from "../assets/surya.png";
import logo from "../assets/surya-teja-logo.png";

function AboutMe() {
  return (
    <div className="about-page">

      <div className="hero-card">

        <img
          src={aboutBg}
          alt="Background"
          className="hero-bg"
        />

        <img
          src={profile}
          alt="Surya Teja Gorli"
          className="hero-driver"
        />

        <img
  src={logo}
  alt="Surya Teja Gorli"
  className="hero-logo"
/>

        <div className="hero-contact">
    <a href="mailto:suryatejagorli12@gmail.com">
        ✉ Email Me
    </a>

    <a
        href="https://linkedin.com/in/suryatejagorli"
        target="_blank"
        rel="noopener noreferrer"
    >
        in LinkedIn
    </a>
</div>

      </div>

    </div>
  );
}

export default AboutMe;