import React from 'react'
import logo from "../images/airbnb-logo.png"

const Navbar = () => {
  return (
    <nav>
        <img className='nav-logo' src={logo} />
    </nav>
  )
}

export default Navbar