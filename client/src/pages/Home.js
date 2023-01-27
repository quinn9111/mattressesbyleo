import Checkout from '../components/cart'
import BrandMattresses from '../components/productsBrands'
import VendorsList from '../components/vendors'


const Home = () => {
    return (
        <>
        <div className='container home-page'>

            <h1>check out our vendors</h1>
            <VendorsList />
            <BrandMattresses />
            <Checkout />
        </div>
        </>
    )
}

export default Home