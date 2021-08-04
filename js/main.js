let burgerMenu = document.getElementById('burger_menu')
let menuMovil = document.querySelector('.menu-movil')
let checkMenu = document.getElementById('checkMenu')

burgerMenu.addEventListener('click', () => {
    // console.log('click en menu burger')
    // (checkMenu.checked) ?  : 

    if (checkMenu.checked) {
        menuMovil.style.transition = '.3s ease-in'
        menuMovil.style.display = "block"
        menuMovil.style.marginLeft = "0"
        burgerMenu.className = 'fas fa-times'

    } else {
        menuMovil.style.marginLeft = "-100%"
        menuMovil.style.transition = '.3s ease-in'
        burgerMenu.className = 'fas fa-bars'
        // menuMovil.style.transform = "rotate(0)"
    }
    // menuMovil.style.marginLeft = "0"
    // burgerMenu.className = 'fas fa-times'
})