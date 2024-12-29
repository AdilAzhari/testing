import React, { useState } from "react";
import LinkButton from "./LinkButton";
import { Link } from "react-router-dom";
import "../../assets/LearnMore/learnmore.css";
import imageLeftBottom from "../../assets/Footer/image-bottom-left.png";
import imageRightBottom from "../../assets/Footer/image-right-bottom.png";
import imageLeftTop from "../../assets/Footer/image-top-left.png";
import imageRightTop from "../../assets/Footer/image-top-right.png";

const LearnMoreSection = ({
  borderLinkStyle,
  borderArrowStyle,
  cover_image,
  title,
  summary,
  link,
  colour,
}) => {
  const faqs = [
    {
      question: "What is Apex Carnival?",
      answer:
        "APEX Carnival is a social MMO set in a vibrant, virtual carnival environment. Players can customize their avatars, interact with others, and participate in a variety of carnival games. Apex Carnival also integrates cryptocurrency rewards through APEX tokens, making your gaming experience both fun and potentially profitable. ",
    },
    {
      question: "What kind of games are available at APEX Carnival?",
      answer:
        "APEX Carnival is a social MMO set in a vibrant, virtual carnival environment. Players can customize their avatars, interact with others, and participate in a variety of carnival games. Apex Carnival also integrates cryptocurrency rewards through APEX tokens, making your gaming experience both fun and potentially profitable. ",
    },
    { question: "What are APEX Tickets?", answer: "The benefits include..." },
    {
      question: "How does the affordable ousing initiative works?",
      answer:
        "APEX Carnival is a social MMO set in a vibrant, virtual carnival environment. Players can customize their avatars, interact with others, and participate in a variety of carnival games. Apex Carnival also integrates cryptocurrency rewards through APEX tokens, making your gaming experience both fun and potentially profitable.",
    },
    {
      question: "How do I create APEX Carnival account?",
      answer:
        "APEX Carnival is a social MMO set in a vibrant, virtual carnival environment. Players can customize their avatars, interact with others, and participate in a variety of carnival games. Apex Carnival also integrates cryptocurrency rewards through APEX tokens, making your gaming experience both fun and potentially profitable.",
    },
    {
      question: "How do I contact the APEX support centre?",
      answer:
        "APEX Carnival is a social MMO set in a vibrant, virtual carnival environment. Players can customize their avatars, interact with others, and participate in a variety of carnival games. Apex Carnival also integrates cryptocurrency rewards through APEX tokens, making your gaming experience both fun and potentially profitable.",
    },
    // Add more FAQs as needed
  ];

  const [openCards, setOpenCards] = useState(Array(faqs.length).fill(false));

  const toggleOpen = (index) => {
    setOpenCards((prevOpenCards) => {
      const newOpenCards = [...prevOpenCards];
      newOpenCards[index] = !newOpenCards[index];
      return newOpenCards;
    });
  };

  return (
    <>
      <span className="learn-more-first-line"></span>
      <div className="learn-more-section">
        <div className="learn-more-intro">
          <div className="learn-more-intro-text">
            <p>LEARN MORE ABOUT APEX</p>
            <h2>
              <span className="learn-more-intro-text-freq">Frequently</span>
              <span className="learn-more-intro-text-ask">
                {" "}
                Asked Questions
              </span>
            </h2>
          </div>
          <div className="learn-more-intro-btn">
            <figure>
              <figcaption>
                <h3>{title}</h3>
                <p>{summary}</p>
                <LinkButton
                  borderLinkStyle={"1px solid #f60"}
                  borderArrowStyle={borderArrowStyle}
                  link={link}
                  label={"Learn More"}
                  dynamicColor={`121.76deg, #FFDE59 15.41%, #FF1616 81.48%`}
                  iconColor={"black"}
                />
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="learn-more-cards-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="learn-more-cards"
              style={{
                background: openCards[index]
                  ? "linear-gradient(90deg, rgba(234, 63, 50, 0.44) 0%, rgba(242, 116, 47, 0.44) 100%)"
                  : "linear-gradient(90deg, hsl(215, 95%, 7%) 100%, hsl(341, 21%, 18%) 0%)",
              }}
            >
              <div className="learn-more-cards-header">
                <div className="learn-more-cards-title">
                  <h4>{faq.question}</h4>
                </div>
                <div
                  onClick={() => toggleOpen(index)}
                  className="learn-more-cards-arrow-container"
                  style={{
                    background: openCards[index]
                      ? "#fff"
                      : "linear-gradient(90deg, hsl(215, 95%, 7%) 100%, hsl(341, 21%, 18%) 0%)",
                    color: openCards[index] ? "#000" : "",
                    cursor: "pointer",
                  }}
                >
                  {openCards[index] ? (
                    <i className="fas fa-chevron-up"></i>
                  ) : (
                    <i className="fas fa-chevron-down"></i>
                  )}
                </div>
              </div>
              {openCards[index] && (
                <div className="learn-more-cards-content">
                  <p className="learn-more-cards-content-text">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Learn more end container */}
      <div className="learn-more-end-container">
        <div className="learn-more-end-content">
          <img
            src={imageLeftTop}
            alt="image left top"
            className="learn-more-end-image-left-top"
          />
          <img
            src={imageRightTop}
            alt=" image right top"
            className="learn-more-end-image-right-top"
          />
          <h1>Want To Bridge The Gap Between Blockchain & Gaming? </h1>
          <p>
            APEX carnival is not just another online game; it’s a platform that
            bridges the gap between entertainment and real-world benefits
          </p>
          {/* the btn */}
          <div className="link-btn-group">
            <Link
              to="/learn-more"
              className="product_card_link"
              style={{ border: "1px solid #fff" }}
            >
              Learn More
            </Link>
            <span
              style={{
                background:
                  "linear-gradient(121.76deg, #ffffff 15.41%, #ffffff 81.48%)",
                border: "0.2px solid #fff",
                color: "black",
              }}
            >
              <i className="fas fa-rocket"></i>
            </span>
          </div>
          <img
            src={imageLeftBottom}
            alt=""
            className="learn-more-end-image-left-bottom"
          />
          <img
            src={imageRightBottom}
            alt=""
            className="learn-more-end-image-right-bottom"
          />
        </div>
      </div>
      <span
        style={{ height: "6rem", backgroundColor: "black", display: "flex" }}
      ></span>
    </>
  );
};

export default LearnMoreSection;
