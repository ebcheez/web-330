/*
===========================================================
; Title: theme.js
; Author: Eric McCool
; Date: 7 January 2023
; Description: JS functions for assignments
===========================================================
*/

function setSelectedTheme(){
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}

function setDefaultTheme() {
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}