import React from "react";
import "./WhyApex.css";

const WhyApex = () => {
  const advantages = [
    {
      icon: "🎮",
      title: "Gaming Innovation",
      description: "Revolutionary gameplay mechanics that blend traditional gaming with blockchain technology"
    },
    {
      icon: "💰",
      title: "Economic Opportunity",
      description: "Create new revenue streams for players through our innovative token economy"
    },
    {
      icon: "🔗",
      title: "Blockchain Integration",
      description: "Seamless integration of blockchain technology without compromising user experience"
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "Contributing to real-world solutions like affordable housing through gaming"
    },
    {
      icon: "🚀",
      title: "Future-Ready",
      description: "Built for the next generation of gaming with scalable, sustainable technology"
    },
    {
      icon: "👥",
      title: "Community-Driven",
      description: "Empowering players to shape the future of gaming through decentralized governance"
    }
  ];

  return (
    <section className="why-apex-section">
      <div className="why-apex-container">
        <div className="why-apex-header">
          <h2>
            Why Choose <span className="gradient-text">Apex Games</span>?
          </h2>
          <p>
            We're not just creating games – we're building the future of interactive entertainment. 
            Here's what sets us apart in the rapidly evolving gaming landscape.
          </p>
        </div>

        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">
                {advantage.icon}
              </div>
              <div className="advantage-content">
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
              <div className="card-number">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        <div className="why-apex-cta">
          <div className="cta-content">
            <h3>Ready to Be Part of the Revolution?</h3>
            <p>
              Join thousands of players who are already experiencing the future of gaming. 
              Start your journey with Apex Games today and discover what makes us different.
            </p>
            <div className="cta-buttons">
              <button className="primary-btn">
                Get Started
                <span className="btn-icon">🚀</span>
              </button>
              <button className="secondary-btn">
                Learn More
                <span className="btn-icon">📖</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyApex;