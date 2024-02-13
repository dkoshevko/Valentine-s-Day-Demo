import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PhotoMarker from "./PhotoMarker";

export default function PhotoMap({ photos }) {
    const position = [47, 2];


    return (
        <div className="w-full">
            <h2 className="text-xl font-medium text-justify px-2 mb-5">
                Nous avons voyagé
            </h2>
            <div className="w-full" style={{ height: "70vh" }}>
                <MapContainer center={position} zoom={5} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }} >
                    <TileLayer

                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    {Array.isArray(photos) && photos.map((photo, index) => (
                        <PhotoMarker key={index} position={[photo.lat, photo.lng]} url={photo.src} index={index} date={photo.date} />
                        ))}
                </MapContainer>
            </div>
        </div>
    )
}
