"use client";

import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";

export default function App() {
    const [showLoader, setShowLoader] = useState(true)
    const [showHome, setShowHome] = useState(false)

    useEffect(() => {
        // Utiliser setTimeout pour masquer le Loader après 3 secondes
        const loaderTimeoutId = setTimeout(() => {
        setShowLoader(false)
        setShowHome(true)
        }, 2500); // 2500 millisecondes équivalent à 3 secondes

        // Nettoyer le timeout lorsque le composant est démonté
        return () => {
        clearTimeout(loaderTimeoutId);
        }
    }, [])

    useLayoutEffect(() => {
        const isAuth = localStorage.getItem("user")

        if(!isAuth) {
            redirect("/")
        }
    }, [])

    return (
        <main>
        {showLoader && <Loader />} {/* Afficher le Loader si showLoader est vrai */}
        {showHome && (
            <div
            className="flex items-center justify-center min-h-screen p-4 bg-cover text-slate-900"
            style={{ backgroundImage: `url('/bg-hearts.jpg')` }}
            >
            hhhh
            </div>
        )}
        </main>
    )
}
