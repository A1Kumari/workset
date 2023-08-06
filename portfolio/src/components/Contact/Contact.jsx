import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import './Contact.css';

const Contact = () => {
  return (
    <>
    <h2 className="contact heading">Contact Me</h2>
    <section className="contact-section">
      <div className="contact-section-container">
        <div className="Contact">
          
          <div className="contact-con glass-morphism-card">
            <h3 className="">Get in Touch</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="input" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="input" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className="input" rows="4" required />
              </div>
              <button className="cta-button">View Projects</button>
            </form>
          </div>
          <div className="about-part">
            <h3 className="Aboutheading">About Me</h3>
            <p className="about-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu facilisis sodales, dui odio ultricies justo, in cursus risus purus at nisi.
            </p>
            <div className="social-links-contact">
        <a href="#" className="social-link"><AiOutlineInstagram/></a>
        <a href="#" className="social-link"><AiOutlineGithub/></a>
        <a href="#" className="social-link"><AiFillLinkedin/></a>
      </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
