let boxMenu = document.querySelector('.box-menu')
let navbarSupported = document.querySelector('#navbarSupportedContent')
let closeMenu =document.querySelector('#close-menu')

navbarSupported.addEventListener('click' , () => {
    boxMenu.classList.add('active')
})
closeMenu.addEventListener('click' , () => {
    boxMenu.classList.remove('active')
})

