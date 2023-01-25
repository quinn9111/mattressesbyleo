import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-bar'>
            <nav>
                <NavLink to='/'>
                    <h1>mattresses by leo</h1>
                </NavLink>
                <NavLink 
                        activeclassname='active',
                        to ='/products'>
                    <h3>

                    <h3>    
                <NavLink/>
            <NavLink to ='/search'>
            </NavLink>
            <NavLink to ='/Cart'>
            </NavLink>
            </nav>
            </div>
    )
    
}

export default Nav