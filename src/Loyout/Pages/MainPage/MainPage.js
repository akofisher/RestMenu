import React, { useRef } from 'react'
import CategorySlider from '../../../Components/CategSlider/CategorySlider'
import DropDownMenu from '../../../Components/DropDownMenu/DropDownMenu'
import ProductCard from '../../../Components/ProductCard/ProductCard'
import { Categories, Products } from '../../../data'
import Loyout from '../../Loyout'
import './MainPage.css'

export default function MainPage() {
  const goTo = useRef()

  return (
    <Loyout>
      <div className="MainPageContainer">
        {process.env.REACT_APP_MENU == 2 ? (
          <div className="PromoCardSlider" ref={goTo}>
            <button
              className="BTNLEFT"
              onClick={() => (goTo.current.scrollLeft -= 100)}
            >
              {'<'}
            </button>

            {Categories.map((val) => {
              return <CategorySlider props={val} key={val.id} />
            })}

            <button
              className="BTNRIGHT"
              onClick={() => (goTo.current.scrollLeft += 100)}
            >
              {'>'}
            </button>
          </div>
        ) : (
          <DropDownMenu />
        )}
        <div className="ProductsContainer">
          {localStorage.getItem('catName') == null &&
          localStorage.getItem('catName') == undefined ? (
            <p className="CategoryHeadName">სპეც შეთავაზება</p>
          ) : (
            <p className="CategoryHeadName">
              {localStorage.getItem('catName')}
            </p>
          )}

          {Products.map((val, idx) => {
            return <ProductCard props={val} key={idx} />
          })}
        </div>
      </div>
    </Loyout>
  )
}
