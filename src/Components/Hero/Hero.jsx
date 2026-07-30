import React from 'react'
import hero_img from '../../Assets/ji3jcqhd.png'
import './Hero.css'
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero_left">

        <span className="hero-badge">🔥 Summer Sale - Up to 50% OFF</span>

        <h1>
          Elevate Your <span>Style</span><br />
          With Premium Fashion
        </h1>

        <p>
          Discover trendy outfits for every occasion. From everyday essentials
          to elegant collections, shop premium fashion designed for comfort,
          confidence, and style.
        </p>

        <div className="hero-buttons">
          <button
            className="shop-btn"
            onClick={() => navigate("/products")}
          >
            Shop Now →
          </button>

          <button
            className="explore-btn"
            onClick={() => navigate("/products")}
          >
            Explore Collection
          </button>
        </div>

        <div className="hero-features">
          <div>🚚 Free Shipping</div>
          <div>⭐ 15K+ Happy Customers</div>
          <div>🔒 Secure Checkout</div>
        </div>

      </div>

      <div className="hero_right">
        <div className="circle"></div>
        <img src={hero_img} alt="Fashion Model" />
      </div>

    </section>
  );
};

export default Hero
