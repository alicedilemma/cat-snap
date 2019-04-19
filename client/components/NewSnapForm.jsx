import React from 'react'

// bulma components
import { Field, Label, Control, Input } from 'react-bulma-components/full'

// api
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
    const { message, name, story, friendliness } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          {/* <Field>
            <Label>Name</Label>
            <Control>
              <Input
                type='text'
                value={name}
                onChange={this.changeHandler}
                placeholder='Cat&apos;s name (if known)'
                name='name' />
            </Control>
          </Field> */}

          <br />
          <input
            type='text'
            value={story}
            onChange={this.changeHandler}
            placeholder='Story'
            name='story' />
          <br />
          <input
            type='text'
            value={friendliness}
            onChange={this.changeHandler}
            placeholder='How friendly? (1 to 10)'
            name='friendliness' />
          <br />
          <input
            type='submit'
            value='Add new snap!'
          />
        </form>
        <p>{message}</p>
      </div>
    )
  }
}

export default NewSnapForm
