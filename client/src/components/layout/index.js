import { css } from '@emotion/react'
import { Outlet } from 'react-router-dom'
import Nav from '../nav'

const Layout = () => {
    return (
        <div className='site'>
            <Nav />
            <div className='page'>

            <Outlet />

            </div>
        </div>
    )
}

export default Layout