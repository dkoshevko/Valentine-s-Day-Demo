"use client"

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import Loader from "@/components/Loader";

import Introduction from "@/components/Introduction";
import StaticMap from "@/components/StaticMap";
import Icons from "@/components/Icons";
import PhotoMap from "@/components/PhotoMap";
import PhotoSlider from "@/components/PhotoSlider";

import photosArray from "./photosArray";
import DownloadButton from "@/components/DownloadButton";


export default function App() {

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
  };

  return (
    <main>
      {showLoader && <Loader />}{" "}
      {/* Afficher le Loader si showLoader est vrai */}
      {showHome && (
        <div
          className="min-h-screen bg-cover text-slate-900 flex flex-col items-center relative"
          style={{ backgroundImage: `url("/bg-hearts.jpg")` }}
        >
          <Introduction />
          <StaticMap />
          <Icons />
          <PhotoMap photos={photosArray} />
          <PhotoSlider photos={photosArray} />
          <DownloadButton />
          
          <h3>Une centaine de coeurs seraient trop peu nombreux pour transporter tout mon amour pour toi.</h3>
          <h3>Merci de me rendre heureux.</h3>
          <div className="text-xs mt-10 static bottom-0">
            Fait avec ❤️
          </div>
        </div>
      )}
    </main>
  )
}
