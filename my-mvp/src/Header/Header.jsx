import React from 'react'
import {NavLink} from "react-router-dom"
import logo from './../logo.svg'
import style from './Header.module.css'

const Header = () => {
  return <div>
    <NavLink to={'/'}>
      <img className={style.logo} src={logo}/>
    </NavLink>
  </div>
}

export default Header