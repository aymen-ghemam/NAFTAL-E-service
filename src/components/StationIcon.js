import React from 'react'

const StationIcon = (props) => {
  return (
    <div>
        <img src={`/assets/${props.status}.png`} alt="station icon" />
    </div>
  )
}

export default StationIcon