import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/home'
import ProductList from './components/products/productList'
import Login from './components/login'
import Cart from './components/cart'
import React, { useState } from 'react'
import ProductList from './components/products/productList'


function App() {
  const [width, setWindowWidth] = useState(0)

  const updateDimensions = () => {
    width = window.innerWidth
    setWindowWidth(width)

    updateDimensions()
  }

  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />} />
            <Route index element={<Home />} />
            <Route path='products' element={<ProductList />} />
            <Route path='login' element={<Login />} />
            <Route path='cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App

