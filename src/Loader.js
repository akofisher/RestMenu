import React from 'react'

export default function Loader() {
  return (
    <React.Fragment>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </React.Fragment>
  )
}
