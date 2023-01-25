import React, { useEffect } from 'react'
import { useStoreContext } from '../../utils/GlobalState'
import { UPDATE_MATTRESSES } from '../../utils/actions'
import { QUERY_MATTRESSES } from '../../utils/queries'
import { useQuery } from '@apollo/client'
import { idbPromise } from '../../utils/helpers'



const BrandProducts = () => {
    const [state, dispatch] = useStoreContext();

    const { currentBrand } = state;
  
    const { loading, data } = useQuery(QUERY_MATTRESSES);

    useEffect(() => {
        if (data) {
          dispatch({
            type: UPDATE_MATTRESSES,
            products: data.products,
          });
          data.products.forEach((product) => {
            idbPromise('products', 'put', product);
          });
        } else if (!loading) {
          idbPromise('products', 'get').then((products) => {
            dispatch({
              type: UPDATE_MATTRESSES,
              products: products,
            });
          });
        }
      }, [data, loading, dispatch]);
    
      function filterProducts() {
        if (!currentBrand) {
          return state.products;
        }
    
        return state.products.filter(
          (product) => product.category._id === currentBrand
        );
      }
    
      return (
        <div className="my-2">
          <h2>Our Products:</h2>
          {state.products.length ? (
            <div className="flex-row">
              {filterProducts().map((product) => (
                <ProductItem
                  key={product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))}
            </div>
          ) : (
            <h3>You haven't added any products yet!</h3>
          )}
          {loading ? <img src={spinner} alt="loading" /> : null}
        </div>
      )
}

export default BrandProducts