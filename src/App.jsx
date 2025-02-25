import { useState } from 'react'
// import Card from './components/Card'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingBar from './components/BookingBar'
import HowItWorks from './components/HowItWorks'
import CarListHome from './components/CarListHome'

function App() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <BookingBar/>
        <HowItWorks/>
        <CarListHome/>
    </>
  )
}

export default App
