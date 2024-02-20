"use client";

import { useEffect } from "react";
import { checkForVisibility } from "../env/scrollReveal";


export default function Separator() {
  // Show or hide Separator on scroll
  useEffect(() => {
    function handleScroll() {
      checkForVisibility("separator");
    }

    window.addEventListener("DOMContentLoaded", handleScroll);
    window.addEventListener("load", handleScroll);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return <div className="separator my-10"></div>;
}
