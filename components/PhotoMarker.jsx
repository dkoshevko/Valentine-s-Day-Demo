import { Carattere } from "next/font/google"
import { Marker, Popup } from 'react-leaflet';
import Image from 'next/image';
import L from "leaflet";

// Typographie Google Fonts
const carattere = Carattere({
    subsets: ['latin'],
    weight: "400"
})

export default function PhotoMarker({ position, url, index, date }) {
    const customIcon = new L.icon({
        iconUrl: url,
        iconSize: [60, 60], // ajustez la taille de l'icône selon vos besoins
        iconAnchor: [30, 60], // point d'ancrage de l'icône
        popupAnchor: [0, -40], // point d'ancrage du popup
        className: "rounded-full border border-red-500"
    })



    return (
        <Marker position={position} icon={customIcon}>
            <Popup minWidth={300} closeButton={false} >
                <Image src={url} alt="" width={301} height={300} className='rounded-xl' />
                <div className={carattere.className}>
                    <div className='flex justify-center py-1 text-xl'>
                        ❤️{date}✨
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}