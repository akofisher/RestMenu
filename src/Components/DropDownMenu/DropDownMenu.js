import React, { useState } from 'react'
import { Categories } from '../../data'
import './DropDownMenu.css'

export default function DropDownMenu() {
  const [menu, setMenu] = useState(false)

  const CategoryName = async (val) => {
    await setMenu(false)
    await localStorage.setItem('catName', val.name)
    window.location.reload()
  }

  return (
    <div className="DropDownMenu">
      <button
        onClick={() => {
          if (menu) {
            setMenu(false)
          } else {
            setMenu(true)
          }
        }}
        className="DropDownButton"
      >
        მენიუ
      </button>
      {menu ? (
        <div className="MenuCategories">
          {Categories.map((val, idx) => {
            return (
              <button
                key={idx + 1}
                onClick={() => CategoryName(val)}
                className="MenuButtons"
              >
                {val.name}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
