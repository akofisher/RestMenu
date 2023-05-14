import React from 'react'
import Cart from '../../Img/cart.png'
import facebook from '../../Img/facebook.svg'
import guliani from '../../Img/guliani.svg'
import instagram from '../../Img/instagram.png'

import './Header.css'

export default function Header() {
  return (
    <div className="HeaderMainCont">
      <img src={guliani} alt="Restaurant image" className="RestaurantLogo" />
      <h1 className="RestaurntName">პური გულიანი</h1>
      <div className="SocLinksContainer">
        <a href="https://facebook.com" target="_blank" className="CartLink">
          <img src={Cart} alt="Social Logo" className="CartLogo" />
          <span className="cart_counter">36</span>
        </a>
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
