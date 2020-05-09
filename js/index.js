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

//6th event: Zooms in on the bus image using the scroll wheel
    let topImage = document.querySelector('img')

    topImage.addEventListener("wheel", (event) => {
        event.target.style.transform = "scale(1.2)"
        event.target.style.transition = "all 2s"
        // resets on duble click, but I'm not sure why
    })




//7th event: removes a class on load that 
let fullBgSelector = document.querySelector('body');

window.addEventListener('load', (event) => {
    fullBgSelector.classList.remove("bgFade");
    
})

//8th event: styling nav buttons on focus
let anchorSelector = document.querySelectorAll('nav a');

anchorSelector.forEach(anchors => {
    anchors.addEventListener("focus", (event) => {
        event.target.style.backgroundColor = "red"
        event.target.style.borderRadius = "7px"
        event.target.style.padding = "5px"
        event.target.style.transition = "all 2s"
    })
    //figure out how to reset this if you have time
})


//9th event: Adds focus to the bodies of text as they're scolled over with a pointer
let paraSelector = document.querySelectorAll('p');

paraSelector.forEach(para => {
    para.addEventListener("mousemove", (event) => {
        event.target.style.transition = "all .25s"
        event.target.style.backgroundColor = "grey";
        event.target.style.color = "white";
        event.target.style.padding = "5px";
        event.target.style.borderRadius = "10px";
    })
})

paraSelector.forEach(para => {
    para.addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor = "initial";
        event.target.style.color = "initial";
        event.target.style.padding = "initial";
        event.target.style.borderRadius = "initial";
    })
})

//10th event: alerts the user that fun bus price matches when they drag a trip title

tripHeaders.forEach(trips => {
    trips.setAttribute('draggable', true)
})

tripHeaders.forEach(trips => {
    trips.addEventListener("dragend", (event) => {
        alert("We Price Match!")
    })
})

/// preventing event propagation

let mainNav = document.querySelector('.main-navigation');
let anchorTags = document.querySelector('nav')

//parent: changes entire nav bg to grey
mainNav.addEventListener("click", (event) => {
    mainNav.style.backgroundColor = "grey"
    
})

//child: spins the nav links 360 deg. stopped propagation of the parent event listener so that you can spin the nav links without turning the bg of the nav bar grey. Make sure you're centered within the nav div that houses the links for proper function.
anchorTags.addEventListener("click", (event) => {
    event.target.style.transform = "rotate(360deg)"
    event.target.style.transition = "all 2s"
    event.stopPropagation()
})

//prevent nav bar items from refreshing the page
let navStop = document.querySelectorAll('nav a');

navStop.forEach(links => {
    links.addEventListener("click", (event) =>{
        event.preventDefault()
    })
})




