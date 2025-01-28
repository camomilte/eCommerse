import React from 'react'
import { Outlet } from 'react-router'

import Navigation from '../components/Navbar'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div>
        <main>
            <Navigation />
            <Outlet />
            <Footer />
        </main>
    </div>
  )
}

export default RootLayout
