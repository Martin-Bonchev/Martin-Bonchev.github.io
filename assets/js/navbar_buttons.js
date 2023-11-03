"use strict"

function addToggleThemeListener() {
    document.getElementById("theme-toggle-btn").isLight = true;
    document.getElementById("theme-toggle-btn").addEventListener("click", toggleTheme);
}

function toggleTheme(isLight) {
    let themeToggleBox = document.getElementById("theme-toggle-box");
    let themeToggleBtn = document.getElementById("theme-toggle-btn");

    if (themeToggleBtn.isLight) {
        themeToggleBtn.src = themeToggleBtn.src.replace("sun", "moon"); // Change toggle button image
        themeToggleBtn.classList.replace("item-self-left", "item-self-right"); // Slide button to the right side of the box
        themeToggleBtn.classList.replace("bg-white", "bg-grey"); // Change button background color
        themeToggleBox.classList.replace("bg-light-blue", "bg-dark-blue"); // Change box background color
        document.body.classList.replace("bg-light-theme", "bg-dark-theme"); // Change background image
        themeToggleBtn.isLight = false;
    } else {
        themeToggleBtn.src = themeToggleBtn.src.replace("moon", "sun");
        themeToggleBtn.classList.replace("item-self-right", "item-self-left");
        themeToggleBtn.classList.replace("bg-grey", "bg-white");
        themeToggleBox.classList.replace("bg-dark-blue", "bg-light-blue");
        document.body.classList.replace("bg-dark-theme", "bg-light-theme");
        themeToggleBtn.isLight = true;
    }
}