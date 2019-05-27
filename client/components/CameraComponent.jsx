import React from 'react'
import Camera from 'react-html5-camera-photo'
// import 'react-html5-camera-photo/build/css/index.css'

class CameraContainer extends React.Component {
  onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto')
  }

  render () {
    return (
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri) } }
        />
    )
  }
}

export default CameraContainer