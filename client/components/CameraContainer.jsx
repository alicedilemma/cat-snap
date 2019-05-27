import React from 'react'
import Camera from 'react-html5-camera-photo'

class CameraContainer extends React.Component {

  render () {
    return (
        <Camera
          onTakePhoto = { (dataUri) => { this.props.onTakePhoto(dataUri) } }
        />
    )
  }
}

export default CameraContainer