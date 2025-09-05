import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navbar = () => (
  <header>
    <h1>Munaza Hazrati</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
         <li><Link to="/extras">Extras</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  </header>
)

export default Navbar
