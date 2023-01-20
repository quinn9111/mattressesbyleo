import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import Categories from '../categories'
import ProductList from '../products/productList'

const Home = () => {
    return (
        <>
            <div className='container home-page'>
            <Categories />
            <ProductList />
            /*Cart
            </div>
        </>
    )
}

export default Home