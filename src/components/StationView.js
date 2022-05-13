import React from 'react'
import './StationView.css'

const StationView = () => {
  return (
    <div className='station-view'>
        <div className='header'>
            <img src='/assets/station.png' alt='' />
        </div>
        <div className='body'>
            <h3>Naftal service station</h3>
            <h5>Autoroute sud Cheraga</h5>
            <div className='status'>
                Open
            </div>        
            <a className='navigate' href='#'>Navigate</a>
        </div>
    </div>
  )
}

export default StationView