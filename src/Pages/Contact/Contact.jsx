import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Contact Info + Map */}
      <div className="contact-hero">
  <div className="contact-hero-content">
    <h1>Contact Us</h1>
    <p>
      We'd love to hear from you. Whether you have a question about our
      products, orders, or anything else, our team is always ready to help.
    </p>
  </div>
</div>
      <div className="contact-top">
        <div className="contact-info">
          <h5 className="contact-subtitle">GET IN TOUCH</h5>
          <h2 className="contact-title">
            Visit one of our agency location or contact us today
          </h2>
          <h4>Head office</h4>

          <p><FaMapMarkerAlt className="contact-icon" /> 56 Glassford Street, Glasgow G1 1UL, New York</p>

          <p><FaEnvelope className="contact-icon" /> contact@example.com</p>

          <p><FaPhoneAlt className="contact-icon" /> +1 234 567 890</p>

          <p><FaClock className="contact-icon" /> Monday to Saturday: 09:00 a.m – 06:00 p.m</p>
        </div>

        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.6918509757334!2d-1.2560266841615993!3d51.754816179675404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a41e26f0a1%3A0x84e75a857a9f7a0d!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2suk!4v1692096123456!5m2!1sen!2suk"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <h6 className="form-subtitle">LEAVE A MESSAGE</h6>
        <h2 className="form-title">We love to hear from you</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>
          <button type="button" className="submit-btn">
            Send Message →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
