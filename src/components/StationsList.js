import React, { Fragment } from "react";
import { useState } from "react";
import './Stations.css'

  export function Station({stationName,time}) {
    return (
        <div className="station-card">
            <div className="station-card-first" >
                station {stationName}
            </div> 
            <div className="station-card-second">{time}</div>
        </div>
    ) 
}; 


export default  function StationsList({stations}){

    // const [stations, setStations] = useState([stationsList]); 

    return(
        <div className="station-container">
            <div className="toggle">Need fuel?</div>   
            <div className="stationsList">
                {stations.map(station => <Station key={station.id} stationName={station.stationName} time={station.time} />)}
            </div>
        </div>
       
    )

}
