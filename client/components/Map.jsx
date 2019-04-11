import React from 'react'

const Map = () => {
  initMap = () => {
    const auckland = { lat: -36.8485, lng: 174.7633 }
    // map options
    const options = {
      zoom: 14,
      center: auckland
    }

    // new map
    const map = new google.maps.Map(document.getElementById('map'), options)

    addMarker = (snap) => {
      const marker = new google.maps.Marker({
        position: snap.mapCoords,
        map: map,
        icon: {
          path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW,
          scale: 8
        }
      })
      const infoWindow = new google.maps.InfoWindow({
        mapInfo: snap.mapInfo
      })
      marker.addListener('click', () => {
        infoWindow.open(map, marker)
      })
    }

    return (
      <div></div>
    )
  }
}

export default Map
