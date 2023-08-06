import React from 'react'
import woman from "../Hero/images/woman.jpg";
import "./About.css"

const About = () => {
    return (
      <>
      <div className=''>
         <div className="about-container">
      <div className="">
        <div className="">
          <h1 className="about heading">About Me</h1>
          <p className="about-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus deserunt sint ex quisquam nobis 
            labore. Tenetur sint obcaecati velit nemo perferendis officiis facilis quas est ipsum, consequatur corporis voluptas minima?
          </p>
        </div>
        
      </div>
      <br/>
      <div className="glass-morphism-container">
          <div className="glass-morphism-box">
            <h2 className="">Projects</h2>
            <p className="">10+</p>
          </div>
          <div className="glass-morphism-box">
            <h2 className="">Collaboration</h2>
            <p className="">10+</p>
          </div>
          <div className="glass-morphism-box">
            <h2 className="">Amount Earned</h2>
            <p className="">10+</p>
          </div>
          <div className="glass-morphism-box">
            <h2 className="">Clients</h2>
            <p className="">20+</p>
          </div>
          <div className="glass-morphism-box">
            <h2 className="">Awards</h2>
            <p className="">3</p>
          </div>
        </div>
    </div>
    
    </div>
      </>
    );
};
export default About;