import React, { Fragment } from "react";
import { useState } from "react";
import './Stations.css'

  export function Station({stationName,time}) {
    return (
        <div className="station-card">
            <div className="station-card-first" >
                station {stationName}
            </div> 
            <div className="station-card-second">
                <div className='triangle'></div>
                <div className='time'>{time}</div>
            </div>
        </div>
    ) 
}; 


export default  function StationsList(){
    const [toggle, setToggle] = useState(true);
    const stations = [
        {
            id: 1,
            stationName: "station1",
            time: 11
        },
        {
            id: 2,
            stationName: "station2",
            time: 22
        },
        {
            id: 3,
            stationName: "station3",
            time: 33
        },
        {
            id: 4,
            stationName: "station4",
            time: 44
        },
        {
            id: 5,
            stationName: "station5",
            time: 55
        }
    ]    
    return(
        <div className={`station-container ${!toggle? 'hidden': ''}`}>
            <div className="toggle" onClick={e=> setToggle(!toggle)}>
                Need fuel?
            </div>   
            <div className="stationsList">
                {stations.map(station => <Station key={station.id} stationName={station.stationName} time={station.time} />)}
            </div>
        </div>
       
    )

}
