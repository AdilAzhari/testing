import React from "react";
import "./KeyInnovationSection.css";
import BitcoinTechnology from "../../assets/BitcoinTechnology.png";
import BitcoinTechnology1 from "../../assets/BitcoinTechnology1.png";
import BitcoinTechnology2 from "../../assets/BitcoinTechnology2.png";
import LinkButton from "./LinkButton.jsx";

const KeyInnovationCard = ({
  image,
  title,
  description,
  size,
  colour,
  borderStyle,
  horizontalDisplay,
}) => {
  return (
    <div
      className={`keyInnovation-card ${size}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={`keyInnovation-card-overlay ${
          horizontalDisplay ? "horizontalDisplay" : ""
        }`}
      >
        <div className="keyInnovation-card-title-description">
          <h3 className="keyInnovation-card-title">{title}</h3>
          <p
            className={`keyInnovation-card-description ${
              horizontalDisplay ? "description" : ""
            }`}
          >
            {description}
          </p>
        </div>
        <div className="btn">
          <LinkButton
            borderLinkStyle={borderStyle}
            borderArrowStyle={borderStyle}
            link="#"
            label={"Learn More"}
            dynamicColor={`121.76deg, ${colour} 15.41%, ${colour} 81.48%`}
          />
        </div>
      </div>
    </div>
  );
};

const KeyInnovationSection = () => {
  return (
    <section className="keyInnovation-section">
      <hr />
      <div className="keyInnovation-header-container">
        <h5>OUR KEY INNOVATIONS</h5>
        <h3>
          The Key Innovations By APEX In The <span>Gaming World</span>
        </h3>
      </div>
      <div className="keyInnovation-card-container">
        <KeyInnovationCard
          image={BitcoinTechnology}
          title="Integration of Blockchain Technology"
          description="By incorporating blockchain, we provide a secure, transparent, and decentralized platform for managing digital currencies, enhancing trust and user engagement."
          size="full"
          colour="#FF1616"
          borderStyle="1px solid #FF1616"
          horizontalDisplay={true}
        />
        <div className="keyInnovation-row">
          <KeyInnovationCard
            image={BitcoinTechnology1}
            title="Dual Utility of APEX Tokens"
            description="APEX tokens offer in-game benefits and contribute to real-world applications like affordable housing. This dual utility adds value to the tokens and supports social causes."
            size="half"
            colour="#DCB105"
            borderStyle="1px solid #DCB105"
          />
          <KeyInnovationCard
            image={BitcoinTechnology2}
            title="Affordable Housing Initiative"
            description="APEX tokens offer in-game benefits and contribute to real-world applications like affordable housing. This dual utility adds value to the tokens and supports social causes."
            size="half"
            colour="#004AAD"
            borderStyle="1px solid #004AAD"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyInnovationSection;
