import React from "react";
import { PlayCircle } from "lucide-react";
import "./AboutTheGameSection.css";

const aboutUsGraphic =
  "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600";
const gameplayVideo = 
  "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800";

const AboutIntroSection = () => {
  return (
    <header className="about-header">
      <section className='about-hero-section'>
        {/* Animated background elements */}
        <div className="about-bg-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
        </div>

        <div className="about-container">
          {/* What is Apex Games Section */}
          <div className="about-intro-grid">
            <div className="about-text-content">
              <h1 className="about-main-title">
                What is{" "}
                <span className="gradient-text">
                  Apex Games
                </span>
                ?
              </h1>
              <div className="about-description">
                <p>
                  Apex Games is a pioneering force in the gaming industry,
                  introducing a groundbreaking business model that merges gaming
                  with blockchain technology. We are building a new era of
                  interactive entertainment where players truly own their in-game
                  assets and participate in dynamic, player-driven economies.
                </p>
                <p>
                  Our vision goes beyond traditional gaming, fostering a
                  decentralized ecosystem where creativity thrives, communities
                  are empowered, and innovation is rewarded. We're committed to
                  delivering unparalleled gaming experiences alongside real-world
                  utility and value through blockchain integration.
                </p>
              </div>
              
              {/* Key Features */}
              <div className="key-features">
                <div className="feature-item">
                  <div className="feature-icon">🎮</div>
                  <div>
                    <h4>Immersive Gaming</h4>
                    <p>Next-generation gaming experiences</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">⛓️</div>
                  <div>
                    <h4>Blockchain Integration</h4>
                    <p>True ownership of digital assets</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">💰</div>
                  <div>
                    <h4>Real Value</h4>
                    <p>Earn while you play</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-image-content">
              <div className="image-wrapper">
                <img
                  src={aboutUsGraphic}
                  alt="Apex Games Innovation"
                  className="about-main-image"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>Innovation Meets Gaming</h3>
                    <p>Revolutionizing the industry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="video-showcase">
            <div className="video-header">
              <h2>Experience the Future of Gaming</h2>
              <p>Watch how Apex Games is transforming the gaming landscape</p>
            </div>
            
            <div className="video-container">
              <div className="video-wrapper">
                <img 
                  src={gameplayVideo} 
                  alt="Apex Games Gameplay" 
                  className="video-thumbnail"
                />
                <div className="video-overlay">
                  <button className="play-button">
                    <PlayCircle className="play-icon" />
                  </button>
                  <div className="video-info">
                    <span className="video-title">APEX GAMES SHOWCASE</span>
                    <span className="video-duration">3:45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="stats-section">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Active Players</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$2M+</div>
                <div className="stat-label">Tokens Distributed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Game Modes</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default AboutIntroSection;