import React from 'react'
import './StationIcon.css'

const StationIcon = (props) => {
  return (
    <div className='station-icon'>
        <img src={`/assets/${props.station.status}.png`} alt="station icon" onClick={()=>props.onClick(props.station)} />
        <h2>{props.station.stationName}</h2>
        
    </div>
  )
}


export default StationIcon