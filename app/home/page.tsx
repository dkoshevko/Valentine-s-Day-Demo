"use client"

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
// Import components
import Loader from "@/components/Loader";
import Separator from "@/components/Separator";
import Introduction from "@/components/Introduction";
import Icons from "@/components/Icons";
import PhotoSlider from "@/components/PhotoSlider";
import DownloadButton from "@/components/DownloadButton";
import Quote from "@/components/Quote";
import VoiceMessage from "@/components/VoiceMessage";

const StaticMap = dynamic( () => import("@/components/StaticMap"), { ssr: false } );
const PhotoMap = dynamic( () => import("@/components/PhotoMap"), { ssr: false } );

// Import Photo Array
import photosArray from "../../data/photosArray";


export default function App() {
  // Define states
  const [showLoader, setShowLoader] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    // Use setTimeout to hide the Loader after 2.5 seconds
    const loaderTimeoutId = setTimeout(() => {
      setShowLoader(false);
      setShowHome(true);
    }, 2500); // 2500 milliseconds equals 2.5 seconds

    // Clear timeout when component is unmounted
    return () => {
      clearTimeout(loaderTimeoutId);
    };
  }, []);

  // Check if the user answered correctly 
  useEffect(() => {
    const isAuth = window.sessionStorage.getItem("user");
    if (!isAuth) {
      redirect("/");
    };
  })

  return (
    <main>
      {showLoader && <Loader />}{" "}
      {/* Show Loader if showLoader is true */}
      {showHome && (
        <div className="min-h-screen bg-cover bg-fixed bg-top text-slate-900 flex flex-col items-center relative">
          <Introduction />
          <StaticMap />
          <Icons />
          <PhotoMap photos={photosArray} />
          <Separator />
          <PhotoSlider photos={photosArray} />
          <DownloadButton />
          <VoiceMessage />
          <Quote text="A purpose of human life, no matter who is controlling it, is to love whoever is around to be loved." />

          <div className="flex flex-col items-center font-medium text-center px-2">
            <h4>Currently winning in life because I have you</h4>
            <h4>Thank you for making me happy</h4>
            <Separator />
            <span className="text-xs static bottom-0">Made with ❤️</span>
          </div>

        </div>
      )}
    </main>
  )
}
