import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>&nbsp;&nbsp;
        <NavLink to="/about">About</NavLink>&nbsp;&nbsp;
        <NavLink to="/contact">Contact</NavLink>&nbsp;&nbsp;
      </nav>
    </div>
  )
}

export default Navbar
