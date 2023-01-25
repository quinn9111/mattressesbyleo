import ProductList from '../products/productList'



const Home = () => {
    return (
        <>
        <div className='container home-page'>

            <div className='container categories'>
            <h1>check out our vendors</h1>
            <ProductList />
            </div>
            {/* <Cart /> */}
        </div>
        </>
    )
}

export default Home