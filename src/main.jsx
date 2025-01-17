import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import RootLayout from './layouts/RootLayout'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Login from './Pages/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route element={ <RootLayout /> }>

          <Route path='/' element={ <Home /> } />
          <Route path='/shop' element={ <Shop /> } />
          <Route path='/product-detail' element={ <Product /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/login' element={ <Login /> } />

        </Route>

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
