// navigation on scroll effect
const header = document.querySelector("header")

let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 20) {
        document.querySelector("header").style.background = "transparent";
        document.querySelector("header").style.height = "132px";
        document.querySelector("header").style.transition = ".3s";
    } else {
        document.querySelector("header").style.background = "#fff";
        document.querySelector("header").style.height = "100px";
        document.querySelector("header").style.transition = ".3s";
    }
    prevScrollpos = currentScrollPos;
})