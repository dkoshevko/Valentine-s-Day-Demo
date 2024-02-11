"use client";

import { useState } from "react";
import VoiceBars from "./VoiceBars";

// Function to display current time !WITHOUT real time refresh
const getTime = () => {
  const date: Date = new Date();
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  // Format time to display correcly
  const actualTime: string = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;

  return actualTime;
};

const AUDIO_SRC: string = "music.mp3";

export default function VoiceMessage() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [timeoutIds, setTimeoutIds] = useState<number[]>([]);

  // Format seconds to standart timing (00:00)
  function formatDuration(duration: number): string {
    const minutes: number = Math.floor(duration / 60);
    const seconds: number = Math.floor(duration % 60);
    const formattedSeconds: string = seconds < 10 ? "0" + seconds : seconds.toString();
    return `${minutes}:${formattedSeconds}`;
  };
  // Update duration of the audio into div element
  function updateDuration() {
    const audio = document.getElementById("audio-message") as HTMLAudioElement;
    const durationDiv = document.getElementById("audio-duration") as HTMLElement;
    // Take current time when audio playing and the whole duration
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    if (currentTime == 0) {
      durationDiv.innerHTML = formatDuration(duration);
    } else {
      const remainingTime = duration - currentTime;
      durationDiv.innerHTML = formatDuration(remainingTime);
    }
  };

  // Big function for play/Pause button
  function playPause() {
    // Declaration of DOM Elements
    const buttonStill = document.querySelector(".button-play") as HTMLElement;
    const buttonPulsingShape = document.querySelector(".play-wrapper__circle-pulse") as HTMLElement;
    const bars = document.querySelectorAll(".bar");
    const audio = document.getElementById("audio-message") as HTMLAudioElement;

    // Play/pause toggle on click
    buttonStill.classList.toggle("paused");
    buttonPulsingShape.classList.toggle("pulsing");

    // Set the State for isPlaying
    setIsPlaying(prevIsPlaying => !prevIsPlaying);

    // Calculate animation duration from audio length
    const barAnimationDuration = (audio.duration / 35) * 1000;

    // Animation for voice bars
    function animateBars() {
      bars.forEach((bar, index) => {
        if (bar.classList.contains("bar") && !bar.classList.contains("white-bars")) {
          // Storing the timeout identifier in the timeoutIds array
          const timeoutId = setTimeout(() => {
            bar.classList.add("white-bars");
            bar.classList.remove("bar");
          }, index * barAnimationDuration); // Duration of the animation (1000ms per bar)
          setTimeoutIds(prevIds => [...prevIds, timeoutId as unknown as number]); // Perform an explicit type conversion
        }
      });
    };

    // Pause the animation for voice bars
    function pauseAnimation() {
      timeoutIds.forEach(timeoutId => {
        clearTimeout(timeoutId); // Cancel the associated timeout
      });
      setTimeoutIds([]); // Clear the timeout identifiers
    };

    // Toggle play and pause animation for voice bars and play audio
    if (!isPlaying) {
      animateBars();
      audio.play();
    } else {
      pauseAnimation();
      audio.pause();
    }
  };


  return (
    <div
      style={{ backgroundColor: "#EF4444" }}
      className="my-56 w-72 relative flex gap-5 rounded-xl rounded-bl-none p-3"
    >
      <div id="dialog-corner"></div>
      <div className="play-wrapper">
        <div className="play-wrapper__circle">
          <div className="play-wrapper__circle-pulse"></div>
          <div className="button-play" onClick={playPause}></div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full">
        <VoiceBars />
        <div className="flex justify-between text-xs text-white">
          <span id="audio-duration"></span>
          <span>{getTime()}</span>
        </div>
      </div>
      <audio id="audio-message" src={AUDIO_SRC} onTimeUpdate={updateDuration} onDurationChange={updateDuration}></audio>
    </div>
  )
}
