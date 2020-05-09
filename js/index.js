// Your code goes her



// 1st event: changes Sign Up button colors at bottom of page
let tripButton = document.querySelectorAll('.btn');

tripButton.forEach(trips => {
    trips.addEventListener("mouseover", (event) =>{
        event.target.style.backgroundColor = "red";
    })
})

tripButton.forEach(trips => {
    trips.addEventListener("mouseleave", (event) =>{
        event.target.style.backgroundColor = "#17A2B8";
    })
})

//2nd event: rotates all images 360 degress on a double click
let imgSelector = document.querySelectorAll('img')

imgSelector.forEach(img => {
    img.addEventListener("dblclick", (event) =>{
        event.target.style.transform = "rotate(360deg)"
        event.target.style.transition = "all 0.5s"
    })
})

//3rd event: removes the main bus image for screen sizes under 500px wide
let busSelector = document.querySelector('img')

window.addEventListener('resize', (e) => {
    if (event.target.innerWidth < 500) {
        busSelector.style.display = 'none';
    } else {
        busSelector.style.display = 'initial';
    }
})

//4th event: displays an alert when you click on the trip titles at the bottom
let tripHeaders = document.querySelectorAll('h4')

tripHeaders.forEach(titles => {
    titles.addEventListener('click', (event) => {
        alert("Press OK if you really wanna take this trip");
    })
})

//5th event: asking the user if they're sure they want to leave upon hitting the esc key

window.addEventListener('keydown', (event) => {
    if(event.keyCode === 27) {
        alert("Are you sure you want to leave?")
    }
})

//6th event: Zooms in on images using the scroll wheel

imgSelector.forEach(img => {
    img.addEventListener("wheel", (event) =>{
        event.target.style.transform = "scale(1.2)"
        event.target.style.transition = "all 2s"
        // work on resetting this if you have time
    })
})



//7th event: chagnes bg color of the body on page load from white to black, then back again


/// preventing event propagation

// #1 - stopped nav bar links from auto scrolling the page to the top
let navStop = document.querySelectorAll('nav a');

navStop.forEach(links => {
    links.addEventListener("click", (event) =>{
        event.preventDefault()
    })
})


