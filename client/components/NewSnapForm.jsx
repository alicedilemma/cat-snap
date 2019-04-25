import React from 'react'

// bulma components
import { Form, Button } from 'react-bulma-components/full'

// api
import { addSnap } from '../api'

class NewSnapForm extends React.Component {
  state = {
    message: '',
    name: '',
    story: '',
    friendliness: '',
    image: '',
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

  uploadHandler = e => {
    const file = e.target.files[0]
    this.setState({
      image: file
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.getGeoLocation(() => {
      let data = new FormData()
      data.append('file', this.state.image)
      data.append('name', this.state.name)
      data.append('story', this.state.story)
      data.append('friendliness', this.state.friendliness)
      data.append('lat', this.state.lat)
      data.append('lng', this.state.lng)
      addSnap(data)
    })
  }

  render () {
    const { Label, Input, Field, Control, Textarea } = Form
    const { message, name, story, friendliness } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <Field>
            <Label>Name of cat (if known)</Label>
            <Control>
              <Input
                type='text'
                value={name}
                onChange={this.changeHandler}
                placeholder='Name'
                name='name' />
            </Control>
          </Field>
          <Field>
            <Label>Story of the snap</Label>
            <Control>
              <Textarea
                value={story}
                onChange={this.changeHandler}
                placeholder='Story'
                name='story' />
            </Control>
          </Field>
          <Field>
            <Label>How friendly? (1 = very independent, 10 = extrememly cuddly)</Label>
            <Control>
              <Input
                type='number'
                min='1'
                max='10'
                value={friendliness}
                onChange={this.changeHandler}
                placeholder='5'
                name='friendliness' />
            </Control>
          </Field>
          <Field>
            <input
              type="file"
              name="image"
              accept="image/*;capture=camera"
              onChange={this.uploadHandler} />
          </Field>
          <Field>
            <Control>
              <Button type="primary">Add snap!</Button>
            </Control>
          </Field>

        </form>
        <p>{message}</p>
      </div>
    )
  }
}

export default NewSnapForm
