import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CartSumData, LoadCart } from '../../../CartLogic'
import CartProdCard from '../../../Components/CartProdCard/CartProdCard'
import Loyout from '../../Loyout'
import '../MainPage/MainPage.css'
import './CartPage.css'

export default function CartPage() {
  const CARTDATA = LoadCart()
  let TOTALSUM = CartSumData()
  let nav = useNavigate()

  function financial2(x) {
    return Number.parseFloat(x).toFixed(2)
  }

  return (
    <Loyout>
      <div className="MainPageContainer">
        <p onClick={() => nav(-1)} className="GoBack">
          უკან დაბრუნება
        </p>
        <p className="CategoryHeadName">შეკვეთის დეტალები</p>

        {CARTDATA == null || CARTDATA == undefined ? (
          <p className="CategoryHeadName">შეკვეთა ცარიელია</p>
        ) : (
          Array.from(CARTDATA.values()).map((val, idx) => {
            return <CartProdCard props={val} key={idx} />
          })
        )}
        {CARTDATA == null || CARTDATA == undefined ? null : (
          <div className="totals_container">
            <div className="totals_rows">
              <p className="totals_name">პროდუქტების ჯამი -</p>
              <p id="CartSum" className="totals_name">
                {financial2(TOTALSUM.CartSum)}₾
              </p>
            </div>
            <div className="totals_rows">
              <p className="totals_name">მომსახურების გადასახადი -</p>
              <p id="Shipping" className="totals_name">
                {financial2(TOTALSUM.Shipping)}₾
              </p>
            </div>
            <div className="totals_rows">
              <p className="totals_name">ჯამი -</p>
              <p id="Total" className="totals_name">
                {financial2(TOTALSUM.Total)}₾
              </p>
            </div>
          </div>
        )}
      </div>
    </Loyout>
  )
}
