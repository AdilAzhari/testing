import React from "react";
import rocketImage from "../../assets/Footer/rocket.png";
import appexLogo from "../../assets/Footer/appex-logo.png";
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <>
      <span className="footer-first-line"></span>

      <div className="Footer-section">
        <div className="footer">
          <div className="footer-logo">
            <div className="logo">
              <img className="appex-logo" src={appexLogo} alt="Appex logo" />
            </div>
            <div className="logo-paragraph">
              <p className="logo-paragraph-text">
                Apex Games is a pioneering force in the gaming industry,
                introducing a groundbreaking business model that merges gaming
                with smart chain technology.
              </p>
            </div>
            <div className="logo-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="footer-link"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="footer-link"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="footer-link"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="footer-link"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h2 className="footer-link-h2">Links</h2>
            <ul>
              <li className="footer-list-style">
                <a className="footer-list-link" href="#home">
                  Home
                </a>
              </li>
              <li className="footer-list-style">
                <a className="footer-list-link" href="#about">
                  About
                </a>
              </li>
              <li className="footer-list-style">
                <a className="footer-list-link" href="#products">
                  Products
                </a>
              </li>
              <li className="footer-list-style">
                <a className="footer-list-link" href="#games">
                  Games
                </a>
              </li>
              <li className="footer-list-style">
                <a className="footer-list-link" href="#contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-support">
            <h2 className="footer-link-h2">Support</h2>
            <ul>
              <li className="footer-list-style">
                <a className="footer-list-link" href="#security">
                  Security & Privacy
                </a>
              </li>
              <li className="footer-list-style">
                <a className="footer-list-link" href="#terms">
                  Terms & Conditions
                </a>
              </li>
              <li className="footer-list-style">
                <a className="footer-list-link" href="#policies">
                  Policies
                </a>
              </li>
              <li className="footer-list-style">
                <a className="footer-list-link" href="#community">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-faqs">
            <h2 className="footer-link-h2">FAQs</h2>
            <ul>
              <li className="footer-list-style">
                <a className="footer-list-link" href="#apex-carnival">
                  Apex Carnival
                </a>
              </li>
              <li className="footer-list-style">
                <a className="footer-list-link" href="#gameplay">
                  Gameplay
                </a>
              </li>
              <li className="footer-list-style">
                <a className="footer-list-link" href="#housing">
                  Housing initiative
                </a>
              </li>
              <li className="footer-list-style">
                <a className="footer-list-link" href="#account-security">
                  Account & Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footer-copy-right">
            © 2024 APEX Games. All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
