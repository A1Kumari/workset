import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Project from "./components/Project/Project"
import Form from "./components/Form/Form"
import './App.css'


function App() {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
    
      <Contact/>
    </>
  )
}

export default App;