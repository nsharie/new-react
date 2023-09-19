import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const linkStyle = {
    fontSize: "18px",
    color: "#ededed",
    textDecoration: "none",
    fontWeight: "400",
    marginLeft: "35px",
    transition: "0.3s",
  }

  const activeHover = {
    color: "#00abf0"
  }

  return (
    <header className='header'>
    <Link to="/" className='logo1'>Nawaz.</Link>

    <nav className='navbar'>
      <Link to="/" className='active' style={{...linkStyle,...activeHover}}>Home</Link>
      <Link to="/about" className='navLink' >About</Link>
      <Link to="/skills" className='navLink' >Skills</Link>
      <Link to="/contact" className='navLink' >Contact</Link>
    </nav>
  </header>
  )
}
