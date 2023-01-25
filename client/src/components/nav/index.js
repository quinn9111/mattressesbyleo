import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-bar'>
            <nav>
                <Link to='/'>
                    <h1>mattresses by leo</h1>
                </Link>
                <Link 
                        activeclassname='active',
                        to ='/products'>
                    <h3>

                    <h3>    
                <Link/>
                <Link to ='/search'>
                </Link>
                 <Link to ='/Cart'>
                </Link>
            </nav>
        </div>
    )
    
}

export default Nav