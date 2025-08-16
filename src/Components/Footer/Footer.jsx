import React from 'react'
import { BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_content">
          <div className="footer_name">
            <h2>MyShop</h2>
          </div>
          <div className="socials">
            <FaFacebook className='icon-footer'/>
            <BsInstagram className='icon-footer'/>
            <BsTwitterX className='icon-footer'/>
          </div>
        </div>
        <div className="copy">
          <p>Copyright (c) MyShop 2024. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
