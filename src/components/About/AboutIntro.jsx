import React from "react";
import '../../assets/About/AboutIntro.css';
// import './AboutIntro.css';

const AboutIntro = () => {
  return (
    <section className="about-intro section">
      <div>
        <div>
          <h2 className="text-white text-4xl font-bold mb-4">
            What is <span className="text-orange-500">Apex Games</span>
          </h2>
          <p>
            Apex Games is an equal opportunity, environmentally conscious, and
            future-facing game development studio looking to bridge the gap
            between fintech and gaming. Instead of account-locked points,
            players will use blockchain-based rewards that convert into real
            crypto. Our proprietary token — APEX — powers this decentralized
            ecosystem, driving real-world value through in-game engagement.
          </p>
        </div>
        {/* <img src={introImg} alt="About Intro" className="w-full max-w-md" /> */}
      </div>
    </section>
  );
};

export default AboutIntro;
