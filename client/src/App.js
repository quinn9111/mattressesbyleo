import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { StoreProvider } from './utils/GlobalState'

import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Layout from './components/layout'
import OrderHistory from './pages/OrderHistory'
import BrandMattresses from './components/productsBrands'


// import Cart from './components/cart'
//import React, { useState } from 'react'

//import Cart from './components/cart'
// import React, { useState } from 'react'

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
    return {
      headers: {
        ...headers,
        authorization: token ? `bearer ${token}` : ''
      }
    }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {

  return (
    <ApolloProvider client={client}>
    {/*   <Router> */}
        <div>
          <StoreProvider>
            <Routes>
              <Route path='/' element={<Layout />} />
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/orderhistory' element={<OrderHistory />} />
              <Route path='/productsbrands' element={<BrandMattresses />} />
            </Routes>
          </StoreProvider>
        </div>
     {/*  </Router> */}
    </ApolloProvider>
  )
}

export default App
