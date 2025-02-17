import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import ProductSection from "../../components/ProductSection/ProductSection";
import LearnMoreSection from "../../components/learnMore/LearnMoreSection";
import KeyInnovationSection from "../../components/KeyInnovationSection/KeyInnovationSection";

const HomePage = () => {
  return (
    <div data-testid="hompage">
      <HeroSection />
      <ProductSection />
      <KeyInnovationSection />
      <LearnMoreSection />
      <Footer />
    </div>
  );
};

export default HomePage;
