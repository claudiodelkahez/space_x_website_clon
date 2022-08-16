const btn = document.querySelector('.hamburger');

btn.addEventListener('click', hamburgerToggle);

function hamburgerToggle() {
    btn.classList.toggle('open')
}