  import React, { useState } from "react"
  import Auth from '../utils/auth'
  import { Link } from 'react-router-dom'
  import { useMutation } from '@apollo/client'
  import { ADD_USER } from "../utils/mutations"
  //import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
  const Checkout = () => {
        const [amount, setAmount] = useState(0);
        const [currency, setCurrency] = useState("");
        const [clientSecret, setClientSecret] = useState(null);
        const [error, setError] = useState(null);
        const [metadata, setMetadata] = useState(null);
        const [succeeded, setSucceeded] = useState(false);
        const [processing, setProcessing] = useState(false);
        const stripe = useStripe();

    const [formState, setFormState] = useState({
        address: '',
        address2:'',
        city: '',
        state: '',
        zip: '',

    })
    const cardElementOptions = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#aab7c4"
            }
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
      };
    const [addUser] = useMutation(ADD_USER)


    const handleChange = (event) => {
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const mutationResponse = await addUser({
            variables: { ...formState }
        })

        const token = mutationResponse.data.addUser.token
        Auth.login(token)
    }

   return (
       <>
        <div className="container my-1">

        <h2>Checkout</h2>
        <form onSubmit={handleFormSubmit}>
        <div className="shippingPane">
            <h3>Shipping Address</h3>
            <div className="flex-row space-between my-2">
                <label htmlFor="address">address</label>
                <input
                    placeholder="1000 Main St."
                    name="address"
                    type="text"
                    id="address"
                    value={formState.address}
                    onChange={handleChange}
                />
            </div>
            <div className="flex-row space-between my-2">
                <label htmlFor="address2">address 2</label>
                <input
                    placeholder="Suite 100"
                    name="address2"
                    type="text"
                    id="address2"
                    value={formState.address2}
                    onChange={handleChange}
                />
            </div>
            <div className="flex-row space-between my-2">
                <div>
                    <label htmlFor="city">city</label>
                    <input
                        placeholder=""
                        name="city"
                        type="text"
                        id="city"
                        value={formState.city}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="state">state</label>
                    <input
                        placeholder="TX"
                        name="state"
                        type="text"
                        id="state"
                        value={formState.state}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="zip">zip</label>
                    <input
                        placeholder="90210"
                        name="zip"
                        type="text"
                        id="zip"
                        value={formState.zip}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
        <div className="billing">
            <h3>Billing</h3>
            <div className="flex-row space-between my-2">
                <label htmlFor="nameOnCard">Name on Card</label>
                <input
                    placeholder=""
                    name="nameOnCard"
                    type="text"
                    id="nameOnCard"
                    value={formState.nameOnCard}
                    onChange={handleChange}
                />
            </div>
            <div className="flex-row space-between my-2">
               
                
                className="sr-input sr-card-element"
                options={cardElementOptions}
                
            </div>
            
       </div>
        <div className="flex-row flex-end">
          <button type="submit">Complete Order</button>
        </div>
      </form>
    </div>
        </>

    )
 }

 
export default Checkout