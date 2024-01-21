"use client";

import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { redirect, useRouter } from "next/navigation";
import MapComponent from "@/components/MapComponent";
import photosArray from "./photosArray";
import PhotoSlider from "@/components/PhotoSlider";

export default function App() {
  const router = useRouter();

  const [showLoader, setShowLoader] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    // Utiliser setTimeout pour masquer le Loader après 3 secondes
    const loaderTimeoutId = setTimeout(() => {
      setShowLoader(false);
      setShowHome(true);
    }, 2); // 2500 millisecondes équivalent à 3 secondes

    // Nettoyer le timeout lorsque le composant est démonté
    return () => {
      clearTimeout(loaderTimeoutId);
    };
  }, []);

  const isAuth = localStorage.getItem("user");
  if (!isAuth) {
    redirect("/");
  }

  return (
    <main>
      {showLoader && <Loader />}{" "}
      {/* Afficher le Loader si showLoader est vrai */}
      {showHome && (
        <div
          className="min-h-screen bg-cover text-slate-900 flex flex-col items-center"
          style={{ backgroundImage: `url('/bg-hearts.jpg')` }}
        >
          <div className="w-full mb-5" style={{ height: "70vh" }}>
            <MapComponent photos={photosArray} />
          </div>
          <PhotoSlider />
        </div>
      )}
    </main>
  );
}
