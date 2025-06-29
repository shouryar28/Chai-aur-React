import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router' // ye ek base create karne ke kaam mein aata hai jaise ki header aur footer waise hi rahega bss uskee andar ke components ko hum change kar sakte hai
import Footer from './components/footer/footer'

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer />
    </>
  )
}

export default Layout
