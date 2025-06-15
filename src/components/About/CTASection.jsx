import React from "react";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-background-elements">
          <div className="cta-element-1"></div>
          <div className="cta-element-2"></div>
          <div className="cta-element-3"></div>
        </div>
        
        <div className="cta-content">
          <div className="cta-header">
            <h2>
              Ready to Bridge The Gap Between{" "}
              <span className="highlight-text">Blockchain & Gaming</span>?
            </h2>
            <p>
              APEX Carnival is more than just a game — it's a revolutionary platform 
              that combines entertainment with real-world benefits. Join the future 
              of gaming where your skills translate to tangible rewards.
            </p>
          </div>

          <div className="cta-features">
            <div className="feature-highlight">
              <div className="feature-icon">🎮</div>
              <span>Immersive Gaming Experience</span>
            </div>
            <div className="feature-highlight">
              <div className="feature-icon">💰</div>
              <span>Earn Real Rewards</span>
            </div>
            <div className="feature-highlight">
              <div className="feature-icon">🌍</div>
              <span>Global Community</span>
            </div>
          </div>

          <div className="cta-actions">
            <button className="cta-primary-btn">
              <span className="btn-text">Get Started</span>
              <span className="btn-icon">🚀</span>
            </button>
            <button className="cta-secondary-btn">
              <span className="btn-text">Watch Demo</span>
              <span className="btn-icon">▶️</span>
            </button>
          </div>

          <div className="cta-stats">
            <div className="stat">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Players</div>
            </div>
            <div className="stat">
              <div className="stat-number">$2M+</div>
              <div className="stat-label">Rewards Distributed</div>
            </div>
            <div className="stat">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;