import "./KeyInnovationSection.css";
import BitcoinTechnology from "../../assets/BitcoinTechnology.png";

import React from "react";
import LinkButton from "./LinkButton";

const KeyInnovatioinCard = ({
  borderLinkStyle,
  borderArrowStyle,
  link,
  colour,
}) => {
  return (
    <div className="keyInnovation-card">
      <img
        src={BitcoinTechnology}
        alt=""
        className="keyInnovation-card-image"
      />

      <div className="keyInnovation-card-overlay">
        <div className="keyInnovation-title-desc">
          <h3 className="keyInnovation-card-title">
            Integration of Blockchain Technology
          </h3>
          <p className="keyInnovation-card-description">
            By incorporating blockchain, we provide a secure, transparent, and
            decentralized platform for managing digital currencies, enhancing
            trust and user engagement.
          </p>
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
        />
      </div>
    </section>
  );
}

export default KeyInnovationSection;
