import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { QUERY_USER } from '../utils/queries'

function OrderHistory() {
  const { data } = useQuery(QUERY_USER)
  let user

  if (data) {
    user = data.user
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">back to our products</Link>

        {user ? (
          <>
            <h2>
              your order history, {user}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {order.products.map(({ _id, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/mattresses/${_id}`}>
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  )
}

export default OrderHistory
