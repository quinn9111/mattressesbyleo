import VendorsList from '../brands/brands'



const Home = () => {
    return (
        <>
        <div className='container home-page'>

            <div className='container categories'>
            <h1>check out our vendors</h1>
            <VendorsList />
            </div>
            {/* <Cart /> */}
        </div>
        </>
    )
}

export default Home