import React from "react";
import NavBar from "../../components/HeroSection/NavBar";
import AboutIntroSection from "../../components/About/AboutTheGameSection";
import VisionMission from "../../components/About/VisionMission";
import WhyApex from "../../components/About/WhyApex";
import CTASection from "../../components/About/CTASection";
import Footer from "../../components/Footer/Footer";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-nav-wrapper">
        <NavBar />
      </div>
      <AboutIntroSection />
      <VisionMission />
      <WhyApex />
      <CTASection />
      <Footer />
    </div>
  );
};

export default AboutPage;