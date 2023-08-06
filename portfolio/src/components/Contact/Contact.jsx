import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-section-container">
        <h2 className="">Contact Me</h2>
        <div className="">
          <div className="">
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
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
          <div className="glass-morphism-card">
            <h3 className="">About Me</h3>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu facilisis sodales, dui odio ultricies justo, in cursus risus purus at nisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
