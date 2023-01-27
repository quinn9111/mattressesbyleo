  import React, { useState } from "react"
  import Auth from '../utils/auth'
  import { Link } from 'react-router-dom'
  import { useMutation } from '@apollo/client'
  import { ADD_USER } from "../utils/mutations"
  
  const SignUp = () => {

    const [formState, setFormState] = useState({
        email: '',
        username:'',
        password: ''
    })

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
            <Link to="/login">← Go to Login</Link>

        <h2>Signup</h2>
        <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
            <label htmlFor="email">email:</label>
            <input
                placeholder="enter your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
            />
        </div>
        <div className="flex-row space-between my-2">
            <label htmlFor="username">username:</label>
            <input
                placeholder="create a username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
            />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">password:</label>
          <input
            placeholder="make it a good one"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
        </>

    )
 }

export default SignUp
