import React from 'react'
import { Outlet } from 'react-router'

import Navigation from '../components/Navbar'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout
