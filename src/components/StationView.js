import React from 'react'
import './StationView.css'

const StationView = (props) => {
  return (
    <div className='wrapper' onClick={props.onClick}>
        <div className='station-view' onClick={e=>{e.stopPropagation()}}>
        <div className='header'>
            <img src='/assets/station.png' alt='' />
        </div>
        <div className='body'>
            <h3>{props.station.stationName}</h3>
            <h5>Autoroute sud Cheraga</h5>
            <div className='status'>
                Open
            </div>        
            <a className='navigate' href='#'>Navigate</a>
        </div>
    </div>
    </div>
  )
}

export default StationView