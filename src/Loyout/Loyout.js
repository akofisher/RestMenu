import React from 'react'
import '../reset.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import './Loyout.css'

export default function Loyout(props) {
  return (
    <div className="Main">
      <Header />
      <div className="MainBodyContainer">{props.children}</div>
      <Footer />
    </div>
  )
}
