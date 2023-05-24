// mobile nav display
const container = document.querySelector('.container')
const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible")
   
    const setTrue = () => {
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("area-expanded", true)
    }

    const setFalse = () => {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute("area-expanded", false)
    }

    visibility === "false" ? setTrue() : setFalse();
})

container.addEventListener('click', () => {
    const setFalse = () => {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute("area-expanded", false)
    }

    primaryNav && setFalse()
    console.log('cont clicked');
})