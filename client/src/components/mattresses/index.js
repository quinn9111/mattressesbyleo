import React, { useEffect } from 'react'
import { useStoreContext } from '../../utils/GlobalState'
import { UPDATE_MATTRESSES } from '../../utils/actions'
import { QUERY_MATTRESSES } from '../../utils/queries'
import { useQuery } from '@apollo/client'
import { idbPromise } from '../../utils/helpers'
import ProductItem from '../productItems'
import { Link } from 'react-router-dom'


const BrandMattresses = () => {
    const [state, dispatch] = useStoreContext()

    const { currentVendor } = state
  
    const { loading, data } = useQuery(QUERY_MATTRESSES)

    useEffect(() => {
        if (data) {
          dispatch({
            type: UPDATE_MATTRESSES,
            mattreses: data.mattresses,
          })
          data.mattresses.forEach((mattress) => {
            idbPromise('mattresses', 'put', mattress)
          })
        } else if (!loading) {
          idbPromise('mattresses', 'get').then((mattresses) => {
            dispatch({
              type: UPDATE_MATTRESSES,
              mattresses: mattresses,
            })
          })
        }
      }, [data, loading, dispatch])
    
      function filterMattresses() {
        if (!currentVendor) {
          return state.mattresses
        }
    
        return state.mattresses.filter(
          (mattress) => mattress.vendor._id === currentVendor
        )
      }
    
      return (
        <div className="my-2">
          <h2>our mattresses:</h2>
          {state.mattresses.length ? (
            <div className="flex-row">
              {filterMattresses().map((mattresses) => (
                <ProductItem
                  key={mattresses._id}
                  _id={mattresses._id}
                  name={mattresses.name}
                  price={mattresses.price}
                  quantity={mattresses.quantity}
                />
              ))}
            </div>
          ) : (
            <h3>your cart is empty :^(</h3>
          )}
        <Link to='/'>go back to home</Link>
        </div>
      )
}

export default BrandMattresses