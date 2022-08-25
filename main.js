var menuButton_img = document.querySelector(".menu-button")
var menu_ul = document.querySelector(".mobile-menu")

menu_ul.style.left = "-120%"

function showMenu(){
    if (menu_ul.style.left === "-120%"){
        menu_ul.style.left = "0"
        menuButton_img.src = "assets/shared/mobile/icon-close.svg"
    }
    else{
        menu_ul.style.left = "-120%"
        menuButton_img.src = "assets/shared/mobile/icon-hamburger.svg"
    }
}