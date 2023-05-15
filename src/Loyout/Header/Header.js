import React from 'react'
// import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { GetCartCount } from '../../CartLogic'
import Cart from '../../Img/cart.png'
import facebook from '../../Img/facebook.svg'
import guliani from '../../Img/guliani.svg'
import instagram from '../../Img/instagram.png'
import { CART_PAGE, MAIN_PAGE } from '../../routes'
import './Header.css'

export default function Header() {
  let CartCount = GetCartCount()
  let nav = useNavigate()
  // const { t, i18n } = useTranslation()

  // const ChangeLanguage = (language) => {
  //   i18n.changeLanguage(language)
  // }
  return (
    <div className="HeaderMainCont">
      <img
        onClick={() => nav(MAIN_PAGE)}
        src={guliani}
        alt="Restaurant image"
        className="RestaurantLogo"
      />
      <h1 onClick={() => nav(MAIN_PAGE)} className="RestaurntName">
        პური გულიანი
      </h1>
      <div className="SocLinksContainer">
        <a onClick={() => nav(CART_PAGE)} target="_blank" className="CartLink">
          <img src={Cart} alt="Social Logo" className="CartLogo" />
          <span id="COUNTER" className="cart_counter">
            {CartCount}
          </span>
        </a>
        <a href="https://facebook.com" target="_blank" className="SocLink">
          <img src={facebook} alt="Social Logo" className="SocLogo" />
        </a>
        <a href="https://instagram.com" target="_blank" className="SocLink">
          <img src={instagram} alt="Social Logo" className="SocLogo" />
        </a>
        {/* <select
          onChange={(val) => ChangeLanguage(val.target.value)}
          name="languages"
          id="languages"
        >
          <option value="ge">ქართული</option>
          <option value="ru">Русскиӣ</option>
          <option value="en">English</option>
        </select> */}
      </div>
    </div>
  )
}
