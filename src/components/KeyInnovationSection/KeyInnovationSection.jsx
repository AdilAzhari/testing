import "./KeyInnovationSection.css";
import BitcoinTechnology from "../../assets/BitcoinTechnology.png";
import BitcoinTechnology1 from "../../assets/BitcoinTechnology1.png";
import BitcoinTechnology2 from "../../assets/BitcoinTechnology2.png";

import React from "react";
import LinkButton from "./LinkButton";

const KeyInnovatioinCard = ({
  borderLinkStyle,
  borderArrowStyle,
  link,
  colour,
  size,
  verticalDisplay,
  image,
  fullWidth,
  title,
  description,
}) => {
  return (
    <div
      className={`keyInnovation-card ${
        size === "half" ? "half-width" : "full-width"
      }`}
    >
      <img src={image} alt="" className="keyInnovation-card-image" />

      <div
        className={`keyInnovation-card-overlay ${
          verticalDisplay === "vertical" ? "verticalDisplay" : ""
        }`}
      >
        <div
          className={`keyInnovation-title-desc ${
            fullWidth === "full-width" ? "full-width" : ""
          } `}
        >
          <h3 className="keyInnovation-card-title">{title}</h3>
          <p className="keyInnovation-card-description">{description}</p>
        </div>

        <LinkButton
          borderLinkStyle={borderLinkStyle}
          borderArrowStyle={borderArrowStyle}
          link={link}
          label={"Learn More"}
          dynamicColor={`121.76deg, ${colour} 15.41%, ${colour} 81.48%`}
        />
      </div>
    </div>
  );
};

function KeyInnovationSection() {
  return (
    <section className="keyInnovation-section">
      <hr />
      <div className="keyInnovation-header-container">
        <div>
          <h5>OUR KEY INNOVATIONS</h5>
          <h3>
            The Key Innovations By APEX In The <span>Gaming World</span>
          </h3>
        </div>
      </div>
      <div className="keyInnovation-card-container">
        <KeyInnovatioinCard
          borderLinkStyle={"1px solid #f60"}
          borderArrowStyle={"1px solid #f60"}
          link={"/"}
          colour={"#FF1616"}
          size="full"
          image={BitcoinTechnology}
          title="Integration of Blockchain Technology"
          description="By incorporating blockchain, we provide a secure, transparent, and decentralized platform for managing digital currencies, enhancing trust and user engagement."
        />
        <KeyInnovatioinCard
          borderLinkStyle={"1px solid #f60"}
          borderArrowStyle={"1px solid #f60"}
          link={"/"}
          colour={"#FF1616"}
          size="half"
          image={BitcoinTechnology1}
          verticalDisplay="vertical"
          fullWidth="full-width"
          title="Dual Utility of APEX Tokens"
          description="APEX tokens offer in-game benefits and contribute to real-world applications like affordable housing. This dual utility adds value to the tokens and supports social causes."
        />
        <KeyInnovatioinCard
          borderLinkStyle={"1px solid #f60"}
          borderArrowStyle={"1px solid #f60"}
          link={"/"}
          colour={"#FF1616"}
          size="half"
          verticalDisplay="vertical"
          image={BitcoinTechnology2}
          fullWidth="full-width"
          title="Affordable Housing Initiative"
          description="APEX tokens offer in-game benefits and contribute to real-world applications like affordable housing. This dual utility adds value to the tokens and supports social causes."
        />
      </div>
    </section>
  );
}

export default KeyInnovationSection;
