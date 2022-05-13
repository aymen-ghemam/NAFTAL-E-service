import { useState, useEffect} from 'react'
import { MapContainer, Popup, TileLayer, useMap } from 'react-leaflet'
import { MarkerLayer, Marker } from "react-leaflet-marker"
import './MapView.css'
import StationIcon from './StationIcon'

const MapView = (props) => {
    const [stations, setStations] = useState([
        {
            id: 1,
            stationName: "station1",
            time: 11,
            position: [36.701, 3.0575977],
            status: 'red'
        },
        {
            id: 2,
            stationName: "station2",
            time: 22,
            position: [36.702, 3.0675977],
            status: 'orange'
        },
        {
            id: 3,
            stationName: "station3",
            time: 33,
            position: [36.703, 3.0775977],
            status: 'green'
        }
    ]);

    return (
        <MapContainer center={[36.702, 3.0675977]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerLayer>
            {stations.map(station => (
                 <Marker
                 key={station.id}   
                 position={station.position}
                >
                <StationIcon onClick={props.onClick} status={station.status} />
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