import React from 'react'
import './CategorySlider.css'

export default function CategorySlider({ props }) {
  return (
    <>
      <button onClick={() => console.log(props)} className="CategoriesButton">
        <p className="CategoriesName">{props.name}</p>
      </button>
    </>
  )
}
