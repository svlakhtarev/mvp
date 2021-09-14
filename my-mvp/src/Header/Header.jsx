import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from './../logo.svg'
import style from './../AppStyles.module.css'
import {Header} from 'antd/es/layout/layout'

const HeaderPart = () => {
  return <Header>
    <NavLink to={'/'}>
      <img className={style.logo} src={logo} alt={'logo'}/>
    </NavLink>
  </Header>
}

export default HeaderPart