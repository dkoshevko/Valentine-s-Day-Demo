import Image from "next/image";
import { Marker, Popup } from "react-leaflet";
import { carattere } from "../env/fonts";


export default function PhotoMarker({ position, url, date }) {
  // Add custom icons with photos on the map
  const customIcon = new L.icon({
    iconUrl: url,
    iconSize: [60, 60], // Adjust the icon size as needed
    iconAnchor: [30, 60], // Icon anchor point
    popupAnchor: [0, -40], // Popup anchor point
    className: "rounded-full border border-red-500 object-cover",
  });

  return (
    <Marker position={position} icon={customIcon}>
      <Popup minWidth={300} closeButton={false}>
        <Image
          src={url}
          alt=""
          width={301}
          height={300}
          className="rounded-t-lg"
        />
        <div className={carattere.className}>
          <div className="flex justify-center py-1 text-xl">{date}</div>
        </div>
      </Popup>
    </Marker>
  );
}
