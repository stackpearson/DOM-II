let allDivs = document.querySelectorAll('.blocks div')
let blockContainer = document.querySelector('.blocks')

// allDivs.forEach(divs => {
//     divs.addEventListener('click', (event) => {
//         evnt.blockContainer.prependChild('<div>this is a test</div>');
//     })
// })


const grayShip = document.querySelector('.block--gray');

// grayShip.addEventListener('click', (event) => {
//     blockContainer.prepend(grayShip)
// })

allDivs.forEach(divs => {
    divs.addEventListener('click', (event) => {
        blockContainer.prepend(divs)
    })
})



