import hero_image from "../../assets/heroImage.png";
import "./HeroSection.css";

const HeroSection = () => {
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

        <form action=''>
          <input type='email' placeholder='Enter your email to get started' />
          <button type='submit'>+</button>
        </form>
      </div>
      <div className='image-container'>
        <img src={hero_image} alt='hero image' />
      </div>
    </section>
  );
};

export default HeroSection;
