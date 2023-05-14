import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loyout from '../../Loyout'
import './SinglePage.css'

export default function SinglePage() {
  const nav = useNavigate()
  const Prod = useLocation()
  const [data, setData] = useState(Prod.state.product)

  return (
    <Loyout>
      <div className="SinglePageContainer">
        <button
          onClick={() => {
            nav(-1)
          }}
          className="GoBackButton"
        ></button>
        <div className="ProductContainer">
          <img src={data.image} alt="" className="ProductImageOnSingl" />
          <div className="ProductTextsContainer">
            <p className="ProductName">{data.name}</p>
            <p className="ProductDesription">{data.description}</p>
          </div>
          <div className="ProductPricesContainer">
            {data.id % 2 == 1 ? (
              <>
                <p className="ProductsPriceOnSaleSingl">{data.price}₾</p>
                <p className="ProductSalePriceSingl">{data.salePrice}₾</p>
              </>
            ) : (
              <p className="ProductPriceSingl">{data.price}₾</p>
            )}
            <p className="ProductProductionSingl">{data.production}</p>
          </div>
        </div>
      </div>
    </Loyout>
  )
}
