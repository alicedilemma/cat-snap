import React from 'react'

import { signIn, isAuthenticated } from 'authenticare/client'

class SignIn extends React.Component {
  state = {
    username: '',
    password: ''
  }

  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  clickHandler = e => {
    const { username, password } = this.state
    e.preventDefault()
    signIn({
      username,
      password
    }, {
      baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
    })
      .then(token => {
        if (isAuthenticated()) {
          console.log('yay')
        }
      })
  }

  render () {
    const { changeHandler, clickHandler } = this
    return (
      <form>
        <input
          type='text'
          id='username'
          placeholder='username'
          onChange={e => { changeHandler(e) }}>
        </input>
        <input
          type='password'
          id='pasword'
          placeholder='password'
          onChange={e => { changeHandler(e) }}>
        </input>
        <button
          id='submit'
          onClick={e => { clickHandler(e) }}>
          Sign In
        </button>
      </form>
    )
  }
}

export default SignIn
