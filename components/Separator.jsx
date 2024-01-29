"use client";

export default function Separator() {

    function checkForVisibility() {
        let headers = document.querySelectorAll(".separator");
        headers.forEach(function(header) {
            if (isElementInViewport(header)) {
                header.classList.add("separator-visible");
            } else {
                header.classList.remove("separator-visible");
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
        <div className="separator my-10"></div>
    )
}