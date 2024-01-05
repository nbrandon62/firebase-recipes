import React from 'react'
import { Link } from 'react-router-dom'

import './styles/header.css'

const NavBar = () => {
  return (
    <div className='header-wrapper'>
      <div className='navbar-header__container'>
        <Link to='/'>
          <h1 className='navbar__title'>#cheflife at home</h1>
          </Link>
      </div>
    </div>
  )
}

export default NavBar
