"use client";
// React Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Icon} from 'leaflet'
import { FaLocationArrow } from "react-icons/fa";

L.Marker.prototype.setIcon(L.icon({
  iconUrl:"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
}))

export default function Map() {
    const position = [36.285334462694784, 50.011222641938225]
    
    return (
        <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={new Icon({iconUrl: <FaLocationArrow/>})}>
          <Popup>
            Barista
          </Popup>
        </Marker>
      </MapContainer>
    )
}
