import React, { useState } from 'react'
import MapView from '../components/MapView'
import StationView from '../components/StationView'
import StationsList from '../components/StationsList'

const Map = (page) => {
    const [activeStation, setActiveStation] = useState();
    const [toggleStationView, setToggleStationView] = useState(false);
    const toggle = (station)=>{
        setActiveStation(station);
        setToggleStationView(!toggleStationView);
    }

    const stations = [
        {
            id: 1,
            stationName: "Station Naftal",
            time: 11,
            position: [36.690, 3.0575977],
            status: 'red'
        },
        {
            id: 2,
            stationName: "Station Naftal",
            time: 22,
            position: [36.709, 3.0675977],
            status: 'orange'
        },
        {
            id: 3,
            stationName: "Station Naftal",
            time: 33,
            position: [36.703, 3.0775977],
            status: 'green'
        }
    ]
  return (
    <div className='map'>
        <MapView onClick = {toggle} stations = {stations} />

        {toggleStationView?<StationView station={activeStation} onClick={toggle} />: ''}  
        <StationsList />
    </div>
  )
}

export default Map