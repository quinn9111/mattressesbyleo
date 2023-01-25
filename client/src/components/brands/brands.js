import React, { useEffect } from 'react'
import { useStoreContext } from '../../utils/GlobalState'
import { useQuery } from '@apollo/client'
import { idbPromise } from '../../utils/helpers'
import { UPDATE_CURRENT_VENDOR, UPDATE_VENDORS } from '../../utils/actions'
import { QUERY_VENDORS } from '../../utils/queries'

const VendorsList = () => {

    const [state, dispatch] = useStoreContext();

    const { vendors } = state;
  
    const { loading, data: vendorsData } = useQuery(QUERY_VENDORS);
  
    useEffect(() => {
      if (vendorsData) {
        dispatch({
          type: UPDATE_VENDORS,
          vendors: vendorsData.vendors
        })
        vendorsData.vendors.forEach((vendor_id) => {
          idbPromise('vendor', 'put', vendor_id)
        })

      } else if (!loading) {
        idbPromise('vendor', 'get').then((vendors) => {
          dispatch({
            type: UPDATE_VENDORS,
            vendors: vendors,
          })
        })
      }
    }, [vendorsData, loading, dispatch]);
  
    const handleClick = (vendor_id) => {
      dispatch({
        type: UPDATE_CURRENT_VENDOR,
        currentVendor: vendor_id,
      })
    }

    return (
      <div>
      <h2>choose a brand:</h2>
      {vendors.map((vendor_id) => (
        <button
          key={vendor_id}
          onClick={() => {
            handleClick(vendor_id);
          }}
        >
          {vendor_id.name}
        </button>
      ))}
    </div>
    )

}

export default VendorsList