import React from 'react'

// components
import CameraContainer from './CameraContainer'
import PhotoPreview from './PhotoPreview'

// bulma components
import { Form, Button } from 'react-bulma-components/full'

// api
import { addSnap } from '../../api'

class NewSnapForm extends React.Component {
  state = {
    message: '',
    name: '',
    story: '',
    friendliness: '',
    image: '',
    lat: '',
    lng: '',
    cameraDisplay: 'camera' // camera or preview
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

  onTakePhoto = (dataUri) => {
    console.log(dataUri)
    this.setState({
      image: dataUri,
      cameraDisplay: 'preview',
      message: ''
    })
  }

  discardPhoto = () => {
    this.setState({
      image: '',
      cameraDisplay: 'camera'
    })
  }

  submitHandler = e => {
    e.preventDefault()
    const { image, name, story, friendliness, lat, lng } = this.state
    if (image === '') {
      this.setState({
        message: 'You need to take a photo!'
      })
    } else {
      this.getGeoLocation(() => {
        let data = new FormData()
        data.append('image', image)
        data.append('name', name)
        data.append('story', story)
        data.append('friendliness', friendliness)
        data.append('lat', lat)
        data.append('lng', lng)
        addSnap(data)
      })
    }
  }

  render () {
    const { Label, Input, Field, Control, Textarea } = Form
    const { message, name, story, friendliness, cameraDisplay, image } = this.state
    return (
      <div>
        {cameraDisplay === 'camera' && <CameraContainer
          onTakePhoto={this.onTakePhoto}
        />}
        {cameraDisplay === 'preview' && <PhotoPreview
          image={image}
          discardPhoto={this.discardPhoto}
        />}
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
