"use strict"

document.getElementById("theme-toggle-img").addEventListener("click", themeToggleButton);

function themeToggleButton() {
    var img_src = document.getElementById("theme-toggle-img").src;
    var img_filename = img_src.substring(img_src.lastIndexOf('/') + 1);

    if (!(img_filename.localeCompare("sun.svg"))) { // localeCompare() returns 0 if strings are equal
        document.getElementById("theme-toggle-img").src = img_src.substring(0, img_src.lastIndexOf('/') + 1) + "moon.svg";
        document.getElementById("theme-toggle-img").style.marginLeft = "auto";
    } else {
        document.getElementById("theme-toggle-img").src = img_src.substring(0, img_src.lastIndexOf('/') + 1) + "sun.svg";
        document.getElementById("theme-toggle-img").style.marginLeft = "0";
    }
}