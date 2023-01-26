import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'
import { LOGIN } from '../utils/mutations'
import Auth from '../utils/auth'

function Login(props) {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const [login, { error }] = useMutation(LOGIN)


  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      const mutationResponse = await login({
        variables: { username: formState.username, password: formState.password },
      })

      const token = mutationResponse.data.login.token
      Auth.login(token)
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <div className="container my-1">
      <Link to="/signup">← Go to Signup</Link>

      <h2>log in</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="username">username:</label>
          <input
            placeholder="enter your username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">the username or password is incorrect</p>
          </div>
        ) : null}
      </form>
      <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
        <Link to='/'>home</Link>
    </div>
  )
}

export default Login
