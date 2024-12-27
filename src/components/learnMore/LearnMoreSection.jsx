import React from "react";
import LinkButton from "./LinkButton";
import "../../assets/LearnMore/learnmore.css";

const LearnMoreSection = ({
  borderLinkStyle,
  borderArrowStyle,
  cover_image,
  title,
  summary,
  link,
  colour,
}) => {
  return (
    <div className="learn-more-section">
      <div className="learn-more-intro">
        <div className="learn-more-intro-text">
          <p>LEARN MORE ABOUT APEX</p>
          <h2>
            <span className="learn-more-intro-text-freq">Frequently</span>
            <span className="learn-more-intro-text-ask"> Asked Questions</span>
          </h2>
        </div>
        <div>
          <figure>
            <figcaption>
              <h3>{title}</h3>
              <p>{summary}</p>
              <LinkButton
                borderLinkStyle={borderLinkStyle}
                borderArrowStyle={borderArrowStyle}
                link={link}
                label={"Learn More"}
                dynamicColor={`121.76deg, ${colour} 15.41%, ${colour} 81.48%`}
              />
            </figcaption>
          </figure>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LearnMoreSection;
