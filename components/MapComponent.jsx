import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PhotoMarker from "./PhotoMarker";

export default function MapComponent({ photos }) {
    const position = [47, 2];


    return (
        <MapContainer center={position} zoom={5} scrollWheelZoom={false} style={{ height: '100%', width: '100%'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {Array.isArray(photos) && photos.map((photo, index) => (
                <PhotoMarker key={index} position={[photo.lat, photo.lng]} url={photo.url} index={index} date={photo.date} />
            ))}
        </MapContainer>
    );
}
