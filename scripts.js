
var slideMenu = {
    navigationMenu: document.getElementsByTagName("nav")[0],
    menuButton: document.querySelector(".menu-button"),
    hamburgerMenu: document.querySelector(".hamburger"),
    exitIcon: document.querySelector(".exit-menu")
};



function showNavigation() {
    slideMenu.navigationMenu.classList.add("open");
    slideMenu.navigationMenu.classList.remove("closed");
}

function exitNavigation() {
    var scrollLength = window.pageYOffset;
    slideMenu.navigationMenu.classList.remove("open");
    slideMenu.navigationMenu.classList.add("closed");
}

function randomHeader() {
    var randomNumber = Math.round(Math.random() * 5);
    console.log(randomNumber);
    //header.background.style.backgroundImage = headerBackgrounds[randomNumber];
    
}

//Event Handlers
slideMenu.hamburgerMenu.addEventListener("click", showNavigation, false);
slideMenu.menuButton.addEventListener("click", showNavigation, false);
slideMenu.exitIcon.addEventListener("click", exitNavigation, false);





var webButton = document.querySelector('.web-button');
var printButton = document.querySelector('.print-button');
var blogButton = document.querySelector('.blog-button');
var firstRow = document.querySelector('.first');
var webDesign = document.querySelector('.web-design');



printButton.addEventListener("click", function () {
    window.scrollTo(0, firstRow.offsetTop);
}, false);

webButton.addEventListener("click", function () {
    window.scrollTo(0, webDesign.offsetTop);
}, false);

