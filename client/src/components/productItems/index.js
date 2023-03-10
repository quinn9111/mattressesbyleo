import React from "react"
import { Link } from "react-router-dom"
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState"
import { ADD_TO_CART, UPDATE_CART } from "../../utils/actions"
import { idbPromise } from "../../utils/helpers"

function ProductItem(item) {
  const [state, dispatch] = useStoreContext()

  const {
    name,
    _id,
    price,
    quantity
  } = item

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      })
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      })
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      })
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 })
    }
  }

  return (
    <div className="card px-1 py-1">
      <Link to={`/productsBrands/${_id}`}>
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>add to cart</button>
    </div>
  )
}

export default ProductItem
