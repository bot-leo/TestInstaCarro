import React from 'react'


import './index.css'



export default (props) => {
  return(
    <>
    <button className="ButtonOffer" onClick={props.onClick}>
      <p className="TextButtonOffer">Fazer Oferta</p>
    </button>
    </>
  )
}