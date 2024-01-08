"use client";

import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { redirect, useRouter } from "next/navigation";
import MapComponent from "@/components/MapComponent";

export default function App() {
    const router = useRouter()

    const [showLoader, setShowLoader] = useState(true)
    const [showHome, setShowHome] = useState(false)

    useEffect(() => {
        // Utiliser setTimeout pour masquer le Loader après 3 secondes
        const loaderTimeoutId = setTimeout(() => {
        setShowLoader(false)
        setShowHome(true)
        }, 2); // 2500 millisecondes équivalent à 3 secondes

        // Nettoyer le timeout lorsque le composant est démonté
        return () => {
        clearTimeout(loaderTimeoutId);
        }
    }, [])

    const isAuth = localStorage.getItem("user")
    if (!isAuth) {
        redirect("/")
    }

    const samplePhotos = [
        {lat: 48.8566, lng: 2.3522, url: '/bg-hearts.jpg', date: '06.01.2024'}
    ]

    return (
        <main>
        {showLoader && <Loader />} {/* Afficher le Loader si showLoader est vrai */}
        {showHome && (
            <div
            className="flex items-baseline justify-center min-h-screen bg-cover text-slate-900"
            style={{ backgroundImage: `url('/bg-hearts.jpg')` }}
            >
                <div className="w-full" style={{height: '70vh'}}>
                    <MapComponent photos={samplePhotos} />
                </div>
            </div>
        )}
        </main>
    )
}
