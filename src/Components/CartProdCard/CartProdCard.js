import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import More from '../../Img/more.svg'
// import { SINGLE_PAGE } from '../../routes'
import {
  CartSumData,
  ChangeCartItemCount,
  GetCartCount,
  RemoveFromCart,
} from '../../CartLogic'
import Delete from '../../Img/delete.png'
import './CartProdCard.css'

export default function CartProdCard({ props }) {
  const nav = useNavigate()
  const [showItem, setShowItem] = useState(-1)
  const [count, setCount] = useState(Number(props.cartCount))

  const increaseCount = async () => {
    await setCount(Number(count) + 1)
    await ChangeCartItemCount(props.id, 1)
    await CartSumData()
  }
  const decreaseCount = async () => {
    if (Number(count) > 1) {
      await setCount(Number(count) - 1)
      await ChangeCartItemCount(props.id, Number(1 * -1))
      await CartSumData()
    }
  }

  return (
    <>
      {showItem == -1 ? (
        <button
          onClick={() =>
            // nav(SINGLE_PAGE, {
            //   state: {
            //     product: props,
            //   },
            // })
            setShowItem(props.id)
          }
          className="ProductCard"
          id={props.id}
        >
          <img src={props.image} alt="Product" className="ProductImage" />
          <div className="ProductTexts">
            <p className="ProductName">{props.name}</p>
            <p className="ProductDescription">{props.description}</p>
            <div className="quantity_container">
              <button
                className="quantity_btn"
                onClick={(e) => {
                  e.stopPropagation()
                  decreaseCount()
                }}
              >
                -
              </button>
              <span className="quantity_count">{count}</span>
              <button
                className="quantity_btn"
                onClick={(e) => {
                  e.stopPropagation()
                  increaseCount()
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="ProductPrices">
            {props.id % 2 == 1 ? (
              <>
                <p className="ProductPriceOnSale">{props.price}₾</p>
                <p className="ProductSalePrice">{props.salePrice}₾</p>
              </>
            ) : (
              <p className="ProductPrice">{props.price}₾</p>
            )}
            <p className="ProductProduction">{props.production}</p>
          </div>
          <img src={More} alt="MoreIcon" className="MoreIcon" />
          <img
            onClick={async (e) => {
              e.stopPropagation()
              await RemoveFromCart(props.id, count)

              await GetCartCount()
              await CartSumData()
            }}
            src={Delete}
            alt="CartIcon"
            className="CartIcon"
          />
        </button>
      ) : (
        <button
          onClick={() =>
            // nav(SINGLE_PAGE, {
            //   state: {
            //     product: props,
            //   },
            // })
            setShowItem(-1)
          }
          className="ProductContainerOnShow"
          id={props.id}
        >
          <img src={props.image} alt="" className="ProductImageOnSingl" />
          <div className="ProductTextsContainerOnShow">
            <p className="ProductName">{props.name}</p>

            <p className="ProductDesription">{props.description}</p>
          </div>
          <div className="ProductPricesContainerOnShow">
            {props.id % 2 == 1 ? (
              <>
                <p className="ProductsPriceOnSaleSingl">{props.price}₾</p>
                <p className="ProductSalePriceSingl">{props.salePrice}₾</p>
              </>
            ) : (
              <p className="ProductPriceSingl">{props.price}₾</p>
            )}
            <p className="ProductProductionSingl">{props.production}</p>
          </div>
          <div className="quantity_cart_onshow">
            <div className="quantity_container">
              <button
                className="quantity_btn"
                onClick={(e) => {
                  e.stopPropagation()
                  decreaseCount()
                }}
              >
                -
              </button>
              <span className="quantity_count">{count}</span>
              <button
                className="quantity_btn"
                onClick={(e) => {
                  e.stopPropagation()
                  increaseCount()
                }}
              >
                +
              </button>
            </div>
            <img
              onClick={async (e) => {
                e.stopPropagation()
                await RemoveFromCart(props.id, count)
                await GetCartCount()
                await CartSumData()
              }}
              src={Delete}
              alt="CartIcon"
              className="CartIconOnShow"
            />
          </div>
        </button>
      )}
    </>
  )
}
