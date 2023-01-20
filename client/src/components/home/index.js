import Categories from '../categories'
import ProductList from '../products/productList'
import Nav from '../nav'

const Home = () => {
    return (
        <>
        <Nav />
            <div className='container home-page'>
            <Categories />
            <ProductList />
            /*Cart
            </div>
        </>
    )
}

export default Home