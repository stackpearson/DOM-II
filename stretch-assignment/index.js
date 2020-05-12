let allDivs = document.querySelectorAll('.blocks div')
let blockContainer = document.querySelector('.blocks')
let activeDiv = document.getElementById('activeShip')
let topDiv = document.querySelector('.block')

allDivs.forEach(divs => {
    divs.addEventListener('click', (event) => {
        divs.setAttribute('id', 'activeShip');
        divs.setAttribute('onclick', 'moveRight()')
        blockContainer.prepend(divs)
    }) 
})

// activeDiv.addEventListener('mousedown', (event) => {
//     currentPOS = currentPOS+10;

//     event.target.style.right = currentPOS + 'px';
// })

function moveRight() {
    if ('mousedown' === true) {
        // currentPOS = currentPOS+10;
        // activeDiv.style.right = currentPOS + 'px';
        activeDiv.target.style.display = 'none';
    }
}



// activeDiv.addEventListener('mousedown', (event) => {
    
// })



// activeDiv.forEach(divs => {
//     divs.addEventListener('mousedown', (event) => {
//         event.target.style.marginLeft = "50px";
//     }) 
// })

//on mouseup - move div back to start

