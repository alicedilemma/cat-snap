import React from 'react'

import { addSnap } from '../api'

class NewSnapForm extends React.Component {
  state = {
    message: '',
    name: '',
    story: ''
  }

  changeHandler = e => {
    let message = ''
    this.setState({
      [e.target.name]: e.target.value,
      message
    })
  }

  submitHandler = e => {
    e.preventDefault()
    // final validation before submitting
    addSnap({
      name: this.state.name,
      story: this.state.story
    })
      .then(result => {
        console.log('result', result)
      })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            value={this.state.name}
            onChange={this.changeHandler}
            placeholder='Cat&apos;s name (if known)'
            name='name' />
          <br />
          <input
            type='text'
            value={this.state.story}
            onChange={this.changeHandler}
            placeholder='Story'
            name='story' />
          <input
            type='submit'
            value='Add new snap!'
          />
        </form>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default NewSnapForm
