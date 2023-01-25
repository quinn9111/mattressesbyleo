import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
// import Home from './components/home'
// import ProductList from './components/products/productList'
import Login from './components/login'

// import Cart from './components/cart'
//import React, { useState } from 'react'

//import Cart from './components/cart'
// import React, { useState } from 'react'




function App() {
/*   const [width, setWindowWidth] = useState(0)

  const updateDimensions = () => {
    width = window.innerWidth
    setWindowWidth(width)

    updateDimensions()
  } */

  return (
    <>
    <Router>
      <Routes>

          <Route path='/' element={<Layout />} />
            {/* <Route index element={<Home />} />
            <Route path='products' element={<ProductList />} /> */}
            {/* <Route path='login' element={<Login />} />
            <Route path='cart' element={<Cart />} /> */}
          <Route path='/' element={<Login />} />
            {/* <Route path='/home' element= {<Home />} />
            <Route path='/products' element={<ProductList />} />  */}
              {/* <Route path='/cart' element={<Cart />} /> */}

      </Routes>
      </Router>
    </>
  )
}

export default App

