import React from 'react';
import {
  FaGooglePlay,
  FaApple,
  FaShippingFast,
  FaLock,
  FaGift,
  FaMobileAlt,
} from "react-icons/fa";
import './AppPage.css';

const AppPage = () => {
  return (
    <div className="app-page">

      {/* Hero Section */}
      <section className="app-hero">
        <div className="hero-left">
          <span className="hero-tag">SHOP SMARTER</span>

          <h1>
            Shop Anytime,
            <br />
            Anywhere
          </h1>

          <p>
            Download the MyShop mobile app and enjoy faster shopping,
            secure payments, exclusive discounts, and order tracking
            wherever you are.
          </p>

          <div className="app-buttons">
            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="google-play"
            >
              <FaGooglePlay />
              Google Play
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="app-store"
            >
              <FaApple />
              App Store
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600"
            alt="Mobile App"
          />
        </div>
      </section>

      {/* Features */}

      <section className="features">

        <div className="feature-card">
          <FaShippingFast className="feature-icon" />
          <h3>Fast Delivery</h3>
          <p>Quick delivery at your doorstep.</p>
        </div>

        <div className="feature-card">
          <FaLock className="feature-icon" />
          <h3>Secure Payment</h3>
          <p>100% safe and encrypted payments.</p>
        </div>

        <div className="feature-card">
          <FaGift className="feature-icon" />
          <h3>Exclusive Offers</h3>
          <p>Special discounts only for app users.</p>
        </div>

        <div className="feature-card">
          <FaMobileAlt className="feature-icon" />
          <h3>Easy Tracking</h3>
          <p>Track your orders in real time.</p>
        </div>

      </section>

    </div>
  );
};

export default AppPage;
