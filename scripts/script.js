let scrollPosition = window.pageYOffset;
localStorage.setItem('cords', scrollPosition);
let header = document.querySelector('header');
let logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
    let newScrollPosition = window.pageYOffset;
    if (scrollPosition === newScrollPosition) {
        header.classList.remove('scrolled');
        logo.src = "images/logo.png";
    } else {
        header.classList.add('scrolled');
        logo.src = "images/logo-dark.png";
    }
})

let aboutObjects = document.querySelectorAll('.part-of-about');

for (const aboutObject of aboutObjects) {
    aboutObject.addEventListener('mouseover', () => {
        for (const element of aboutObject.children) {
            element.style.transform = "translate(0, -75px)";
        }
    })
}
for (const aboutObject of aboutObjects) {
    aboutObject.addEventListener('mouseout', () => {
        for (const element of aboutObject.children) {
            element.style.transform = "translate(0)";
        }
    })
}
