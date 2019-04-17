import React from 'react'

import { addSnap } from '../api'

class NewSnapForm extends React.Component {
  state = {
    message: '',
    name: '',
    story: '',
    friendliness: '',
    lat: '',
    lng: ''
  }

  getGeoLocation = (callback) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }, callback)
        }
      )
    } else {
      console.log('geolocation did not work')
    }
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
    this.getGeoLocation(() => {
      addSnap({
        name: this.state.name,
        story: this.state.story,
        friendliness: this.state.friendliness,
        lat: this.state.lat,
        lng: this.state.lng
      })
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
          <br />
          <input
            type='text'
            value={this.state.friendliness}
            onChange={this.changeHandler}
            placeholder='How friendly? (1 to 10)'
            name='friendliness' />
          <br />
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
