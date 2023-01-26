import React from 'react'
import Search from '../search'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'

const Nav = () => {
    return (
        <div className='nav-bar'>

               
            
                <Link to='/'>
                    <h1>mattresses by leo</h1>
                </Link>

                <Search />

                <nav>
                    <ul>
                        <li>
                        <NavLink
                            exact='true'
                            activeclassname='active'
                            to='/productsBrands' >
                            <h3>products</h3>
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            exact='true'
                            activeclassname='active'
                            to='/login' >
                            <h3>login</h3>
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            exact='true'
                            activeclassname='active'
                            to='/cart' >
                            <h3>cart</h3>
                        </NavLink>
                        </li>
                    </ul>
                </nav>    
        </div>
    )
    
}

export default Nav