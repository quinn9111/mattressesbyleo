import { ADD_CART, } from '../utils/mutations'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { idbPromise } from '../utils/helpers'


const Order = () => {
    const [addCart] = useMutation(ADD_CART)

    useEffect(() => {
        async function saveCart() {
            const cart = await idbPromise('cart', 'get')
            const mattresses = cart.map((item) => item._id)

            if (mattresses.length) {
                const { data } = await addCart({ variables: { mattresses } })
                const mattressData = data.addCart.mattresses

                mattressData.forEach((item) => { 
                    idbPromise('cart', 'delete', item)
                })
            }
        }
        saveCart()
    }, 
    
    [addCart]
    
    )

    return (
        <div>
            <h1> yay! </h1>
            <h2> thank you for shopping with us </h2>
            <h3> click home to be redirected to the homepage </h3>
            <Link to='/' classsName='flat-button'>home</Link>
        </div>
    )
}

export default Order