import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navbar = () => (
  <header>
    <h1>Munaza Hazrati</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  </header>
)

export default Navbar
