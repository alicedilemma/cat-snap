import React from 'react'

function PhotoPreview (props) {
  const { image, discardPhoto } = props
  return (
    <div>
    <img src={image} />
    <button
      onClick={discardPhoto}>
      X
    </button>
    </div>

  )
}

export default PhotoPreview