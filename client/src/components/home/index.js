import Categories from '../categories'
import ProductList from '../products/productList'
import Nav from '../nav'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div className='container home-page'>
            <div className='container searchbar'>
                <Nav />
            </div>
            
        </div>
        </>
    )
}

export default Home