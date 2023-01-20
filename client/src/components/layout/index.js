import { css } from '@emotion/react'
import { Outlet } from 'react-router-dom'

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