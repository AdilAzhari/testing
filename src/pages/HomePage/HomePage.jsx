import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div data-testid='hompage'>
      <HeroSection />
      <Footer />
    </div>
  );
};

export default HomePage;
