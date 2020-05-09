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


/// preventing event propagation

// #1 - stopped nav bar links from auto scrolling the page to the top
let navStop = document.querySelectorAll('nav a');

navStop.forEach(links => {
    links.addEventListener("click", (event) =>{
        event.preventDefault()
    })
})


