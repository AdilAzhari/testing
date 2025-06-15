import React from "react";
import "./VisionMission.css";

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      <div className="vision-mission-container">
        <div className="section-header">
          <h2>Our Vision & Mission</h2>
          <p>Driving the future of gaming through innovation and purpose</p>
        </div>
        
        <div className="vision-mission-grid">
          <div className="vision-card">
            <div className="card-icon">
              <div className="icon-wrapper vision-icon">
                🚀
              </div>
            </div>
            <div className="card-content">
              <h3>Our Vision</h3>
              <p>
                To revolutionize the gaming industry by creating a decentralized ecosystem 
                where players have true ownership of their digital assets. We envision a 
                future where gaming transcends entertainment to become a platform for 
                economic empowerment and social impact.
              </p>
              <div className="vision-points">
                <div className="point">
                  <span className="point-icon">⭐</span>
                  <span>Decentralized gaming economy</span>
                </div>
                <div className="point">
                  <span className="point-icon">🌍</span>
                  <span>Global accessibility</span>
                </div>
                <div className="point">
                  <span className="point-icon">🔮</span>
                  <span>Future-ready technology</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mission-card">
            <div className="card-icon">
              <div className="icon-wrapper mission-icon">
                🎯
              </div>
            </div>
            <div className="card-content">
              <h3>Our Mission</h3>
              <div className="mission-list">
                <div className="mission-item">
                  <div className="mission-number">01</div>
                  <div className="mission-text">
                    <h4>Develop Premium Cryptocurrency</h4>
                    <p>Create APEX tokens that provide real utility and value</p>
                  </div>
                </div>
                <div className="mission-item">
                  <div className="mission-number">02</div>
                  <div className="mission-text">
                    <h4>Engaging Gaming Experiences</h4>
                    <p>Deliver fun, rewarding games that integrate seamlessly with blockchain</p>
                  </div>
                </div>
                <div className="mission-item">
                  <div className="mission-number">03</div>
                  <div className="mission-text">
                    <h4>Integrated Economy</h4>
                    <p>Launch merchandise and services fully integrated with APEX ecosystem</p>
                  </div>
                </div>
                <div className="mission-item">
                  <div className="mission-number">04</div>
                  <div className="mission-text">
                    <h4>Real-World Impact</h4>
                    <p>Enable players to generate value beyond the gaming environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="core-values">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🔒</div>
              <h4>Security</h4>
              <p>Protecting player assets with cutting-edge blockchain security</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h4>Community</h4>
              <p>Building inclusive gaming communities that thrive together</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>Continuously pushing boundaries in gaming and blockchain technology</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <h4>Sustainability</h4>
              <p>Creating long-term value for players and the environment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;