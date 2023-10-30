"use strict"

function addToggleThemeListener() {
    document.getElementById("theme-toggle-img").addEventListener("click", toggleTheme);
}

function toggleTheme() {
    var themeToggleBtn = document.getElementById("theme-toggle-img")
    var img_src = document.getElementById("theme-toggle-img").src;
    var img_filename = img_src.substring(img_src.lastIndexOf('/') + 1);
    
    if (!(img_filename.localeCompare("sun.svg"))) { // localeCompare() returns 0 if strings are equal
        document.getElementById("theme-toggle-img").src = img_src.substring(0, img_src.lastIndexOf('/') + 1) + "moon.svg"; // Change toggle button image
        themeToggleBtn.classList.replace("item-self-left", "item-self-right");
        themeToggleBtn.classList.replace("bg-white", "bg-light-grey");
        document.getElementById("theme-toggle-box").classList.replace("bg-light-blue", "bg-dark-blue");
        document.body.classList.replace("bg-light-theme", "bg-dark-theme"); // Change background image
    } else {
        document.getElementById("theme-toggle-img").src = img_src.substring(0, img_src.lastIndexOf('/') + 1) + "sun.svg";
        themeToggleBtn.classList.replace("item-self-right", "item-self-left");
        themeToggleBtn.classList.replace("bg-light-grey", "bg-white");
        document.getElementById("theme-toggle-box").classList.replace("bg-dark-blue", "bg-light-blue");
        document.body.classList.replace("bg-dark-theme", "bg-light-theme"); 
    }
}