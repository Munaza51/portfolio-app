import React from 'react'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Hero from '../components/Hero' // <-- Add this line

const Home = () => (
  <main>
    <Hero />
    <About />
    <Projects />
    <Skills />
  </main>
)

export default Home