const btn = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay')

document.addEventListener('scroll',  removeOverlay);

function removeOverlay() {
    overlay.classList.remove('show')
}

btn.addEventListener('click', hamburgerToggle);

function hamburgerToggle() {
    btn.classList.toggle('open')
    overlay.classList.toggle('show')
}