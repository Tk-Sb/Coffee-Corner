const homePage = document.getElementById("home-page")
const aboutPage = document.getElementById("about-page")
const menuPage = document.getElementById("menu-page")
const pages = document.querySelectorAll(".page")
const navBar = document.getElementById("nav-bar")

const homeBtn = document.getElementById("home")
const aboutBtn = document.getElementById("about")
const menuBtn = document.getElementById("menu")
const contactBtn = document.getElementById("contact")
const buttons = document.querySelectorAll(".nav")
const catagories = document.querySelectorAll(".catagories")
const catagoriesMovement = document.getElementById("catagories-movement")

// navigation
buttons.forEach((btn, top) => {
    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 650*top,
            behavior: "smooth"
        })
    })
})

// catagories navigation
catagories.forEach((btn, left, screenWidth) => {
    btn.addEventListener("click", () => {
        screenWidth = document.body.clientWidth
        console.log(screenWidth)
        catagoriesMovement.scrollTo({
            left: screenWidth*left,
            behavior: "smooth"
        })
        catagories[left].classList.add("under-line")
        catagories.forEach((btn, i) => {
            if(i !== left){
                catagories[i].classList.remove("under-line")
            }
        })
    })
})

// to change to color of the navigation bar //
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting === true && entry.target === homePage){ // home page
            navBar.classList.remove("light")
            navBar.classList.add("dark")
            wrapper.classList.remove("animate")
            wrapper.classList.add("hide")
            aboutBtn.classList.remove("under-line")
            menuBtn.classList.remove("under-line")
            homeBtn.classList.add("under-line")
        }
        else if(entry.isIntersecting === true && entry.target === aboutPage){ // about page
            navBar.classList.remove("dark")
            navBar.classList.add("light")
            wrapper.classList.remove("hide")
            wrapper.classList.add("animate")
            homeBtn.classList.remove("under-line")
            menuBtn.classList.remove("under-line")
            aboutBtn.classList.add("under-line")
        }
        else if(entry.isIntersecting === true && entry.target === menuPage){ // menu page
            homeBtn.classList.remove("under-line")
            aboutBtn.classList.remove("under-line")
            menuBtn.classList.add("under-line")
        }
    })
})
pages.forEach((element) => {
    observer.observe(element)
})