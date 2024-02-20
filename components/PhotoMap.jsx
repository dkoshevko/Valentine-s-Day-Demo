import { MapContainer, TileLayer } from "react-leaflet"; // Documentation on https://leafletjs.com/reference.html
// Import Marker component
import PhotoMarker from "./PhotoMarker";


export default function PhotoMap({ photos }) {
  const position = [47, 2]; // Centered on France

  return (
    <div className="w-full">
      <h2 className="text-xl font-medium text-justify px-2 mb-5">
        We have travelled
      </h2>
      {/* height must be explicit */}
      <div className="w-full" style={{ height: "70vh" }}>
        <MapContainer
          center={position}
          zoom={5}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            detectRetina={true}
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* mapping the photos array */}
          {Array.isArray(photos) &&
            photos.map((photo, index) => (
              <PhotoMarker
                key={index}
                position={[photo.lat, photo.lng]}
                url={photo.src}
                index={index}
                date={photo.date}
              />
            ))}
        </MapContainer>
      </div>
    </div>
  );
}
