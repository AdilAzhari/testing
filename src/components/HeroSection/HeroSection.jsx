import { useState } from "react";
import hero_image from "../../assets/heroImage.png";
import coin1 from "../../assets/coin1.png";
import coin2 from "../../assets/coin2.png";
import coin3 from "../../assets/coin3.png";
import "./HeroSection.css";

const statsData = [
  { icon: coin1, number: 15, label: "Supported Chains" },
  { icon: coin2, number: 250, label: "Supported DEX" },
  { icon: coin3, number: 150, label: "Supported Tokens" },
];

const HeroSection = () => {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
  }

  return (
    <section data-testid='herosection1' className='hero-section'>
      <div className='content-container'>
        <h1>
          Integration Of <br />
          Blockchain Technology <br />
          <span>With The Gaming World</span>
        </h1>
        <p>
          Apex Games Is A Pioneering Force In The Gaming Industry, Introducing A
          Groundbreaking Business Model That Merges Gaming With Fintech
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email to get started'
          />
          <button type='submit'>+</button>
        </form>

        <div className='statistics'>
          {statsData.map((list, idx) => (
            <figure key={idx}>
              <img src={list.icon} alt={list.label} />
              <figcaption>
                <h3>{list.number}</h3>
                <p>{list.label}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className='image-container'>
        <img src={hero_image} alt='hero image' />
      </div>
    </section>
  );
};

export default HeroSection;
