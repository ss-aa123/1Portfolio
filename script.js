
//when scrolling down, top nav bar will change color
const header = document.querySelector("nav")

window.onscroll = function () {
    const top = window.scrollY

    if (top >= 100) {   //if true, then bar will change
        header.classList.add("navbarPink");
    } else {
        header.classList.remove("navbarPink");
    }
};