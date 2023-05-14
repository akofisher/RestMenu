import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="FooterMainCont">
      <img
        src="https://freesvg.org/img/chef-restaurant-logo-publicdomainvectors.png"
        alt="Restaurant image"
        className="RestaurantLogo"
      />
      <h1 className="RestaurntName">გემრიელად მიირთვით</h1>
      <div className="SocLinksContainer">
        <a href="https://facebook.com" target="_blank" className="SocLink">
          <img
            src="https://cdn.mego.ge/img/socials/facebook.svg"
            alt="Social Logo"
            className="SocLogo"
          />
        </a>
        <a href="https://instagram.com" target="_blank" className="SocLink">
          <img
            src="https://cdn.mego.ge/img/socials/instagram.svg"
            alt="Social Logo"
            className="SocLogo"
          />
        </a>
      </div>
    </div>
  )
}
