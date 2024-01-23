"use client"


export default function TextReveal({ text }) {

    function checkForVisibility() {
        let headers = document.querySelectorAll(".text-reveal");
        headers.forEach(function(header) {
            if (isElementInViewport(header)) {
                header.classList.add("text-reveal-visible");
            } else {
                header.classList.remove("text-reveal-visible");
            }
        });
    };

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    if (window.addEventListener) {
        addEventListener("DOMContentLoaded", checkForVisibility, false);
        addEventListener("load", checkForVisibility, false);
        addEventListener("scroll", checkForVisibility, false);
    };


    return (
        <span className="">
            <span className="text-reveal">{text}</span>
        </span>
    )
}