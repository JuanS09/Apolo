import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './Ubicacion.css'
import L from 'leaflet'

const position = [11.9724145, -85.1728966]

const MapView = () =>{
    return <MapContainer center={position} zoom={13}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
            <Popup>
                TV Cable Acoyapa <br /> Apolo 11
            </Popup>
        </Marker>
  </MapContainer>
}

export default MapView;