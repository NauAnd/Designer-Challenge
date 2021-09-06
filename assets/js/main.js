"use strict";

function subModalFixClose() {
    const elements = document.querySelectorAll(".sub-modal__close");
    for (const element of elements) {
        element.addEventListener("click", function() {
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;
            setTimeout(function() {
                window.scrollTo({ top: scrollY, left: scrollX });
            }, 1);
        });
    }
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(subModalFixClose, 1);
} else {
    document.addEventListener("DOMContentLoaded", subModalFixClose, false);
}