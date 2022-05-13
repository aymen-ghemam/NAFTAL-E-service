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
            position: [41.505, -0.09],
            status: 'red'
        },
        {
            id: 2,
            stationName: "station2",
            time: 22,
            position: [42.505, -0.09],
            status: 'orange'
        },
        {
            id: 3,
            stationName: "station3",
            time: 33,
            position: [43.505, -0.09],
            status: 'green'
        }
    ]);

    return (
        <MapContainer center={[41.505, -0.09]} zoom={13} scrollWheelZoom={false}>
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
                <StationIcon status={station.status} />
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