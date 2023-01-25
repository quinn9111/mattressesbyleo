import React from 'react'
import Search from '../search'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-bar'>
                <Link to='/'>
                    <h1>mattresses by leo</h1>
                    //mb logo too
                </Link>

                <Search />

                <nav>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/'>
                    <h3>home</h3>
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/products' >
                    <h3>products</h3>
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/login' >
                    <h3>login</h3>
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/cart' >
                    <h3>cart</h3>
                </NavLink>



                </nav>    
        </div>
    )
    
}

export default Nav