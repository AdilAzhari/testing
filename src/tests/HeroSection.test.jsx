import { render, screen } from "@testing-library/react";
import HeroSection from "../components/HeroSection/HeroSection";

test("Hero Section renders correct heading text", () => {
  render(<HeroSection />);

  const headingElement = screen.getByText("Blockchain Technology");

  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveTextContent("Blockchain Technology");
});
