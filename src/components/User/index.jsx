import React from 'react'

import User from '../../assets/user.svg'
import Arrow from '../../assets/caret.svg'

import './index.css'

export default () =>{
  return(
    <>
      <div className="UserBox">
        <div className="AvatarBox">
          <img src={User} className="imgAvatar"/>
          <p className="NickName">User Test</p>
        </div>
        <img src={Arrow}/>
      </div>
    </>
  )
}