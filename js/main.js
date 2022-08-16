const btn = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.mobile-main-menu')
document.addEventListener('scroll',  removeOverlay);

function removeOverlay() {
    overlay.classList.remove('show')
    menu.classList.remove('show-menu');
}

btn.addEventListener('click', hamburgerToggle);

function hamburgerToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('show');
    menu.classList.toggle('show-menu');
}