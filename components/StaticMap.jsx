import { MapContainer, TileLayer, Marker } from "react-leaflet";

// Typographie Google Fonts
import { Carattere } from "next/font/google";
const carattere = Carattere({
  subsets: ["latin"],
  weight: "400",
});

export default function MapComponent() {
  const positionHeart = [47.56523954716017, 6.024504607722223];
  const positionMap = [47.56530022557392, 6.026892403961677];

  const customIcon = new L.icon({
    iconUrl: "/heart.png",
    iconSize: [40, 40], // la taille de l'icône
    iconAnchor: [20, 38], // point d'ancrage de l'icône
    className: "shadow-2xl",
  });

  return (
    <div className="flex flex-col items-center text-center mb-20">
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
            className="grayscale"
          />
          <Marker position={positionHeart} icon={customIcon} />
        </MapContainer>
      </div>
      <div className={carattere.className}>
        <h2 className="text-4xl">Là où tout a commencé</h2>
      </div>
      <span>
        <h3 className="text-md font-medium">Rosey, France</h3>
        <h3 className="font-light">25.07.2022</h3>
      </span>
    </div>
  );
}
