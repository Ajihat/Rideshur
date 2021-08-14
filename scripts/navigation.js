const navigation = document.querySelector("nav");
const forFleets = document.querySelector(".dropdown div:first-child");
const forDrivers = document.querySelector(".dropdown div:nth-child(2)");
const forBrokers = document.querySelector(".dropdown div:last-child")

window.addEventListener("scroll", function(){
    let scrollPosition = window.scrollY
    if (scrollPosition > 10) {
        navigation.classList.add("nav_shadow")
    }
    else {
        navigation.classList.remove("nav_shadow")
    }
})

forFleets.addEventListener("mouseover", function(){
    document.querySelector(".dropdown div:first-child p").style.color = "rgb(15,136,111)"
    forDrivers.style.opacity = "0.5"
    forBrokers.style.opacity = "0.5"
})

forFleets.addEventListener("mouseout", function(){
    document.querySelector(".dropdown div:first-child p").style.color = "rgb(51,59,69)"
    forDrivers.style.opacity = "1"
    forBrokers.style.opacity = "1"
})

forDrivers.addEventListener("mouseover", function(){
    document.querySelector(".dropdown div:nth-child(2) p").style.color = "rgb(15,136,111)"
    forFleets.style.opacity = "0.5"
    forBrokers.style.opacity = "0.5"
})

forDrivers.addEventListener("mouseout", function(){
    document.querySelector(".dropdown div:nth-child(2) p").style.color = "rgb(51,59,69)"
    forFleets.style.opacity = "1"
    forBrokers.style.opacity = "1"
})

forBrokers.addEventListener("mouseover", function(){
    document.querySelector(".dropdown div:last-child p").style.color = "rgb(15,136,111)"
    forFleets.style.opacity = "0.5"
    forDrivers.style.opacity = "0.5"
})

forBrokers.addEventListener("mouseout", function(){
    document.querySelector(".dropdown div:last-child p").style.color = "rgb(51,59,69)"
    forFleets.style.opacity = "1"
    forDrivers.style.opacity = "1"
})