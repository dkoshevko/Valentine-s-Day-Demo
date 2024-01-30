"use client"

import { use, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

import Loader from "@/components/Loader";
import Separator from "@/components/Separator";

import Introduction from "@/components/Introduction";
// import StaticMap from "@/components/StaticMap";
import Icons from "@/components/Icons";
// import PhotoMap from "@/components/PhotoMap";
import PhotoSlider from "@/components/PhotoSlider";
import DownloadButton from "@/components/DownloadButton";
import Quote from "@/components/Quote";

import photosArray from "../../data/photosArray";

const StaticMap = dynamic( () => import("@/components/StaticMap"), { ssr: false } );
const PhotoMap = dynamic( () => import("@/components/PhotoMap"), { ssr: false } );


export default function App() {

  const [showLoader, setShowLoader] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    // Utiliser setTimeout pour masquer le Loader après 3 secondes
    const loaderTimeoutId = setTimeout(() => {
      setShowLoader(false);
      setShowHome(true);
    }, 2500); // 2500 millisecondes équivalent à 2,5 secondes

    // Nettoyer le timeout lorsque le composant est démonté
    return () => {
      clearTimeout(loaderTimeoutId);
    };
  }, []);

  useEffect(() => {
    const isAuth = window.localStorage.getItem("user");
    if (!isAuth) {
      redirect("/");
    };
  })

  return (
    <main>
      {showLoader && <Loader />}{" "}
      {/* Afficher le Loader si showLoader est vrai */}
      {showHome && (
        <div
          className="min-h-screen bg-cover bg-fixed bg-top text-slate-900 flex flex-col items-center relative"
          style={{ backgroundImage: `url("/bg-hearts.avif")` }}
        >
          <Introduction />
          <StaticMap />
          <Icons />
          <PhotoMap photos={photosArray} />
          <Separator />
          <PhotoSlider photos={photosArray} />
          <DownloadButton />
          <Quote text="Une centaine de coeurs seraient trop peu nombreux pour transporter tout mon amour pour toi." />

          <div className="flex flex-col items-center font-medium">
            <h4>Merci de me rendre heureux</h4>
            <h4>Je t’aime infiniment</h4>
            <Separator />
            <span className="text-xs static bottom-0">Fait avec ❤️</span>
          </div>

        </div>
      )}
    </main>
  )
}
