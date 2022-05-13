import React from 'react'
import MapView from '../components/MapView'
import StationView from '../components/StationView'

const Map = () => {
  return (
    <div className='map'>
        <MapView />
        <StationView/>
    </div>
  )
}

export default Map