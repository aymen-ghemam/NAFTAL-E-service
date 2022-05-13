import React, { useState } from 'react'
import MapView from '../components/MapView'
import StationView from '../components/StationView'
import StationsList from '../components/StationsList'

const Map = (page) => {
  return (
    <div className='map'>
        <MapView />
        <StationView/>
        <StationsList />
    </div>
  )
}

export default Map