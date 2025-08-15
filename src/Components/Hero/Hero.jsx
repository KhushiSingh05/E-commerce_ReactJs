import React from 'react'
import hero_img from '../../Assets/f1.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_left">
          <h2>Unleash Premium Clothing Quality </h2>
          <p>whether you want to shop for corporate wears,casual wears, men's wear or kids wear, We have comfortable clothes to elevate everyday look</p>
          <button>Shop Now</button>
        </div>
        <div className="hero_right">
          <img src={hero_img} alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero
