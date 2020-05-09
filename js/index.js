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





/// preventing event propagation

// #1 - stopped nav bar links from auto scrolling the page to the top
let navStop = document.querySelectorAll('nav a');

navStop.forEach(links => {
    links.addEventListener("click", (event) =>{
        event.preventDefault()
    })
})


