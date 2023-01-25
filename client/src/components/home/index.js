import Categories from '../categories'
import ProductList from '../products/productList'
import Search from './search'
import Nav from '../nav'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div className='container home-page'>
            <div className='container categories'>
            <Categories />
            </div>
            //cart
        </div>
        </>
    )
}

export default Home