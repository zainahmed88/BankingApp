import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Services from '../components/Services'
import Footer from '../components/Footer'
import SignUp from '../components/Signup'
import Discover from '../components/Discover'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info />
      <Discover />
      <Services />
      <SignUp />
      <Footer />
    </>
  )
}

export default Home
