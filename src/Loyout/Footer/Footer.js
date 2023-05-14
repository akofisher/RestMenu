import React from 'react'
import facebook from '../../Img/facebook.svg'
import guliani from '../../Img/guliani.svg'
import instagram from '../../Img/instagram.png'
import './Footer.css'

export default function Footer() {
  return (
    <div className="FooterMainCont">
      <img src={guliani} alt="Restaurant image" className="RestaurantLogo" />
      <h1 className="RestaurntName">გემრიელად მიირთვით</h1>
      <div className="SocLinksContainer">
        <a href="https://facebook.com" target="_blank" className="SocLink">
          <img src={facebook} alt="Social Logo" className="SocLogo" />
        </a>
        <a href="https://instagram.com" target="_blank" className="SocLink">
          <img src={instagram} alt="Social Logo" className="SocLogo" />
        </a>
      </div>
    </div>
  )
}
