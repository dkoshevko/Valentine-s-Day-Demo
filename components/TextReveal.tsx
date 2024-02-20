"use client";

import { useEffect, FC } from "react";
import { checkForVisibility } from "../env/scrollReveal";

type TextRevealProps = {
  text: string
}

const TextReveal: FC<TextRevealProps> = ({ text }) => {
  // Show or hide Text on scroll
  useEffect(() => {
    function handleScroll() {
      checkForVisibility("text-reveal");
    }

    window.addEventListener("DOMContentLoaded", handleScroll);
    window.addEventListener("load", handleScroll);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <span className="w-fit">
      <h3 className="text-reveal">{text}</h3>
    </span>
  );
}

export default TextReveal