import React from 'react'

const StationIcon = (props) => {
  return (
    <div className='station-icon'>
        <img src={`/assets/${props.status}.png`} alt="station icon" onClick={props.onClick} />
    </div>
  )
}

export default StationIcon