import React, { useEffect, useQuery } from 'react'
import { QUERY_VENDORS } from '../../utils/queries'
import { UPDATE_VENDORS, UPDATE_CURRENT_VENDOR } from '../../utils/actions'
import { useStoreContext } from '../../utils/GlobalState'
import { idbPromise } from '../../utils/helpers'


function VendorsList() {
    const { vendors } = state
    const { loading, data: vendorData } = useQuery(QUERY_VENDORS)

    const [state, dispatch] = useStoreContext()

    useEffect(() => {
        if (vendorData) {
            dispatch({
                type: UPDATE_VENDORS,
                vendors: vendorData.vendors
            })
            vendorData.vendors.forEach((vendor) => {
                idbPromise('vendors', 'put', vendor)
            });
        } else if (!loading) {
            idbPromise('vendors', 'get').then((vendors) => {
                dispatch({
                    type: UPDATE_VENDORS,
                    vendors: vendors
                })
            })
        }
    }, [vendorData, loading, dispatch])

    const handleClick = (id) => {
        dispatch({
            type: UPDATE_CURRENT_VENDOR,
            currentVendor: id
        })
    }

    return (
        <div>
            <h2>choose from one of our vendors</h2>
            {vendors.map((item) => (
                <button key={item._id} onClick={() => {
                    handleClick(item._id)
                    }} >{item.name}
                </button>

            ))}
        </div>
    )

}



export default VendorsList