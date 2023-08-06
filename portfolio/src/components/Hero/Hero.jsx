import React from 'react';
import './Hero.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import background from "./images/background.jpg";
import woman from "./images/woman.jpg";

const Hero = () => {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundColor: '#f6e8ea',
      }}
    >
      <div className="social-links">
        <a href="#" className="social-link"><AiOutlineInstagram/></a>
        <a href="#" className="social-link"><AiOutlineGithub/></a>
        <a href="#" className="social-link"><AiFillLinkedin/></a>
    
        <div className="white-line"></div>
      </div>

      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Arya Kumari, a passionate <br/><span>web developer</span><br/> Check out my work below 👇🏻
        </p>
        <button className="cta-button">View Projects</button>
      </div>

      <div className="portrait-box">
        <img className="portrait-img" src={woman} alt="Portrait" />
      </div>
    </div>
  );
};

export default Hero;
