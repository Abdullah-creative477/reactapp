import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-container">
      <h2>Contact Me</h2>
      
      <div className="contact-info">
        <p><strong>Email:</strong> abdullah046125@gmail.com</p>
        <p><strong>Address:</strong> Islamabad, Pakistan</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
