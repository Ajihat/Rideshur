const navigation = document.querySelector("nav");
const forImages = [...document.querySelectorAll("[data-dropdown]")]

window.addEventListener("scroll", function(){
    let scrollPosition = window.scrollY
    if (scrollPosition > 10) {
        navigation.classList.add("nav_shadow")
    }
    else {
        navigation.classList.remove("nav_shadow")
    }
})

    

// forImages.forEach(forImage => {forImage.addEventListener('mouseover', event => {
//         console.log("Myszka wjechała")
//     })
//   })

function mouseOver() {
    forImages.forEach(forImage => forImage.style.opacity = "0.6")
    this.style.opacity = "1"
}
function mouseOut() {
    forImages.forEach(forImage => forImage.style.opacity = "1")
    
}
forImages.forEach(forImage => {forImage.addEventListener('mouseover', mouseOver)})
forImages.forEach(forImage => {forImage.addEventListener('mouseout', mouseOut)})
     
    