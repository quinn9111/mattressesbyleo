import { css } from '@emotion/react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='app'>
            <nav>

            </nav>
            <div className='page'>

            <Outlet />

            </div>
        </div>
    )
}