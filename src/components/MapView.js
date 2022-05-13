import { useState, useEffect} from 'react'
import { MapContainer, Popup, TileLayer, useMap } from 'react-leaflet'
import { MarkerLayer, Marker } from "react-leaflet-marker"
import './MapView.css'
import StationIcon from './StationIcon'

const MapView = (props) => {
    return (
        <MapContainer center={[36.702, 3.0675977]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerLayer>
            {props.stations.map(station => (
                 <Marker
                 key={station.id}   
                 position={station.position}
                >
                <StationIcon onClick={props.onClick} station={station} />
                </Marker>
            ))}

        
        </MarkerLayer>

        {/* {stations.map(station => (
            <Marker 
                key={station.id}
                station = {station}
                position={station.position} 
                eventHandlers={{ click: props.onClick }}
            >
        </Marker>
        ))} */}
        
        </MapContainer>
    )
}

export default MapView