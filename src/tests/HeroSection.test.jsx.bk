import { render, screen } from "@testing-library/react";
import HeroSection from "../components/HeroSection/HeroSection";

test("Hero Section renders correct heading text", () => {
  render(<HeroSection />);

  const headingElement = screen.getByText(
    /Integration Of\s+Blockchain Technology/i
  );

  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveTextContent(
    /Integration Of\s+Blockchain Technology/i
  );
});
