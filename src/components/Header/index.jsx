import React from 'react'

import './index.css'

import Logo from '../../assets/logo.png'
import Phone from '../../assets/phone.svg'

import UserTest from '../User'

export default function Header(){
  return (
    <div className="Header">
      <div className="headerContent">
        <div className="containerLogo">
          <img src={Logo} className="Logo" />

          <div className="TelefoneContainer">
            <img src={Phone} className="imgPhone" />
            <p className="Contato">(11) 3569-3465</p>
          </div>
        </div>

        <UserTest />
      </div>
    </div>
  );
}