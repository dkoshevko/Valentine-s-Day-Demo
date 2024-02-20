import { MapContainer, TileLayer, Marker } from "react-leaflet"; // Documentation on https://leafletjs.com/reference.html
import { carattere } from "../env/fonts";


export default function MapComponent() {
  // Use special website to find longitude & latitude
  const positionHeart = [48.8863, 2.345];
  const positionMap = [48.886143, 2.343124];

  const customIcon = new L.icon({
    iconUrl: "/heart.png",
    iconSize: [40, 40], // Adjust the icon size as needed
    iconAnchor: [20, 38], // Icon anchor point
    className: "shadow-2xl",
  });

  return (
    <div className="flex flex-col items-center text-center mb-20">
      {/* height must be explicit */}
      <div className="w-72 mb-3" style={{ height: "18rem" }}>
        <MapContainer
          center={positionMap}
          zoom={15}
          minZoom={15}
          maxZoom={15}
          zoomControl={false}
          scrollWheelZoom={false}
          dragging={false}
          touchZoom={false}
          doubleClickZoom={false}
          boxZoom={false}
          keyboard={false}
          tap={false}
          style={{ height: "100%", width: "100%" }}
          className="static-map rounded-full shadow-xl"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            detectRetina={true}
            className="grayscale"
          />
          <Marker position={positionHeart} icon={customIcon} />
        </MapContainer>
      </div>
      <div className={carattere.className}>
        <h2 className="text-4xl">Where it all started</h2>
      </div>
      <span>
        <h3 className="text-md font-medium">Paris, France</h3>
        <h3 className="font-light">19.01.2018</h3>
      </span>
    </div>
  );
}
