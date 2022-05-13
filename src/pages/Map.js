import React, { useState } from 'react'
import MapView from '../components/MapView'
import StationView from '../components/StationView'
import StationsList from '../components/StationsList'

const Map = (page) => {
    const [toggleStationView, setToggleStationView] = useState(false);
    const toggle = (id)=>{
        setToggleStationView(!toggleStationView);
    }
  return (
    <div className='map'>
        <MapView onClick = {toggle} />

        {toggleStationView?<StationView onClick={toggle} />: ''}  
        <StationsList />
    </div>
  )
}

export default Map