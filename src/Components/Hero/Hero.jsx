import React from 'react'
import hero_img from '../../Assets/f1.jpg'
import './Hero.css'
import { useNavigate } from "react-router-dom";

const Hero = () => {
   const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/Products");
  }
  return (
    <div>
      <div className="hero">
        <div className="hero_left">
          <h2>Unleash Premium Clothing Quality </h2>
          <p>whether you want to shop for corporate wears,casual wears, men's wear or kids wear, We have comfortable clothes to elevate everyday look</p>
          <button onClick={handleCheckout}>Shop Now</button>
        </div>
        <div className="hero_right">
          <img src={hero_img} alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero
