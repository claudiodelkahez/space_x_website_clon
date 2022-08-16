const btn = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.mobile-main-menu')
const counters = document.querySelectorAll('.counter')
let scrollStarted = false;


document.addEventListener('scroll', removeOverlay);
document.addEventListener('scroll', scrollPage)
btn.addEventListener('click', hamburgerToggle);


function removeOverlay() {
    overlay.classList.remove('show')
    menu.classList.remove('show-menu');
}

function scrollPage() {
    const scrollPos = window.scrollY;
    console.log(scrollPos);
    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        resetCount()
        scrollStarted = false;

    }
}

function hamburgerToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('show');
    menu.classList.toggle('show-menu');
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            // Get count target
            const target = +counter.getAttribute('data-target');
            // Get current counter value
            const c = +counter.innerText;
            //Create an increment
            const increment = target / 100;

            // If Counter is less than target, add increment.

            if (c < target) {
                //round up and set counter value
                counter.innerText = `${Math.ceil(c + increment)}`
                setTimeout(updateCounter, 75)
            } else {
                counter.innerText = target;
            }
        }
        updateCounter()
    })
}

function resetCount() {
    counters.forEach((counter) => counter.innerHTML = 0)
}
