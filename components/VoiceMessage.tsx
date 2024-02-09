"use client"

import { useEffect, useState } from "react";

// Function to display current time !WITHOUT real time refresh
const getTime = () => {
    const date: Date = new Date();
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    // Format time to display correcly
    const actualTime: string = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    return (
        actualTime
    )
}


export default function VoiceMessage() {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            event.preventDefault();
            const pulse = document.querySelector(".play-wrapper__circle-pulse") as HTMLElement;
            const btn = event.target as HTMLButtonElement;
            btn.classList.toggle("paused");
            pulse.classList.toggle("pulsing");
        };

        const btn = document.querySelector(".button-play") as HTMLButtonElement;
        if (btn) {
            btn.addEventListener("click", handleClick);
        }

        return () => {
            if (btn) {
                btn.removeEventListener("click", handleClick);
            }
        };
    }, []);

    return (
        <div style={{backgroundColor: "#EF4444"}} className="my-56 w-72 relative flex rounded-xl rounded-bl-none p-3">
            <div id="dialog-corner"></div>
            <div className="play-wrapper">
                <div className="play-wrapper__circle">
                    <div className="play-wrapper__circle-pulse"></div>
                    <div className="button-play"></div>
                </div>
            </div>
            <div className="flex flex-col">
                <div>
                    visuel
                </div>
                <div className="flex justify-between">
                    <div>
                        duration
                    </div>
                    <div>
                        {getTime()}
                    </div>
                </div>
            </div>
        </div>
    )
}