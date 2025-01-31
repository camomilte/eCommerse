import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './styling/index.css'

import RootLayout from './layouts/RootLayout'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Context from './context/Context'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ErrorPage from './pages/ErrorPage'
import OrderSuccess from './pages/OrderSuccess'
import NotFound from './pages/NotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <BrowserRouter>
        
        <Routes>
          <Route element={ <RootLayout /> }>

            <Route path='/' element={ <Home /> } />
            <Route path='/shop' element={ <Shop /> } />
            <Route path='/shop/product/:id' element={ <Product /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/cart' element={ <Cart />} />
            <Route path='/checkout' element={ <Checkout /> } />
            <Route path='/errorpage' element={ <ErrorPage /> } />
            <Route path='/notfound' element={ <NotFound /> } />
            <Route path='/ordersuccess' element={ <OrderSuccess /> } />



          </Route>

        </Routes>

      </BrowserRouter>
    </Context>
  </StrictMode>,
)
