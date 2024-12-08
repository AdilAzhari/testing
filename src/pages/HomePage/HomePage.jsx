import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import ProductSection from "../../components/ProductSection/ProductSection";

const HomePage = () => {
  return (
    <div data-testid='hompage'>
      <HeroSection />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default HomePage;
