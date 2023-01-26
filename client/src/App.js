import { Router, Route, Routes } from 'react-router-dom'
//import Layout from './components/layout'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { StoreProvider } from './utils/GlobalState'
import Home from './components/home'
import VendorsList from './components/brands/brands'
import Login from './pages/login'
import SignUp from './pages/signUp'
import Nav from './components/nav'

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
/*   const [width, setWindowWidth] = useState(0)

  const updateDimensions = () => {
    width = window.innerWidth
    setWindowWidth(width)

    updateDimensions()
  } */

  return (
    <ApolloProvider client={client}>
    {/*   <Router> */}
        <div>
          <StoreProvider>
            <Nav />
            <Routes>
              <Route 
                path='/' 
                element={<Home />} 
              />
              <Route 
                path='/pages/login' 
                element={<Login />} 
              />
              <Route 
                path='/pages/signup' 
                element={<SignUp />} 
              />
              {/* <Route 
                path='/success' 
                element={<Success />} 
              /> */}
              {/* <Route 
                path='/orderHistory' 
                element={<OrderHistory />} 
              /> */}
              <Route 
                path='/brands' 
                element={<VendorsList />} 
              />
              {/* <Route 
                path='*' 
                element={<NoMatch />} 
              /> */}
            </Routes>
          </StoreProvider>
        </div>
     {/*  </Router> */}
    </ApolloProvider>
  )
}

export default App

