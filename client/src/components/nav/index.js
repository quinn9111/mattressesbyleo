import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header>
            <Link to='/'>
                <h1>mattresses by leo</h1>
            </Link>
            <Link to ='/products'>
            </Link>
            <Link to ='/search'>
            </Link>
            <Link to ='/Cart'>
            </Link>
        </header>
    )
    
}

export default Nav