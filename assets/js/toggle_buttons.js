"use strict"

var themeToggleBtn = document.getElementById("theme-toggle-img");
themeToggleBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
    var img_src = document.getElementById("theme-toggle-img").src;
    var img_filename = img_src.substring(img_src.lastIndexOf('/') + 1);
    
    if (!(img_filename.localeCompare("sun.svg"))) { // localeCompare() returns 0 if strings are equal
        document.getElementById("theme-toggle-img").src = img_src.substring(0, img_src.lastIndexOf('/') + 1) + "moon.svg";
        themeToggleBtn.classList.add("item-self-right");
    } else {
        document.getElementById("theme-toggle-img").src = img_src.substring(0, img_src.lastIndexOf('/') + 1) + "sun.svg";
        themeToggleBtn.classList.toggle("item-self-right");
    }
}