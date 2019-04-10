import React from 'react'

class Snap extends React.Component {
  tags = this.props.snapData.tags.map(tag => {
    return <li key={tag}>{tag}</li>
  })

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    return (
      <div className="snap">
        <h1>{this.props.snapData.name}</h1>
        <img className="snap-image" src={this.props.snapData.image}/>
        <div className="snap-stats">
          <h3>Friendliness: {this.props.snapData.friendliness}</h3>
        </div>
        <div className="snap-story">
          <p>{this.props.snapData.story}</p>
        </div>
        <div className="snap-tags">
          <ul>
            {this.tags}
          </ul>
        </div>
        <div className="snap-location">
          <img className="snap-image" src="http://humaan.com/wp-content/uploads/2014/11/google-maps-basic-marker.png" />
        </div>
      </div>
    )
  }
}

export default Snap
