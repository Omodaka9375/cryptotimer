// navigation on scroll effect
const header = document.querySelector("header")
const mediaQuery = window.matchMedia('(max-width: 425px)')

let headerHeight;

let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 20) {
        if(mediaQuery.matches) {
            headerHeight = "100px";
        }
        else {
            headerHeight = "132px";
        }
        document.querySelector("header").style.background = "transparent";
        document.querySelector("header").style.height = headerHeight;
        document.querySelector("header").style.transition = ".3s";
    } else {
        document.querySelector("header").style.background = "#fff";
        document.querySelector("header").style.height = "100px";
        document.querySelector("header").style.transition = ".3s";
    }
    prevScrollpos = currentScrollPos;
})