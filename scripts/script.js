let scrollPosition = window.pageYOffset;
localStorage.setItem('cords', scrollPosition);
let headers = document.querySelectorAll('header');
let logo = document.querySelector('.logo');
let burger = document.querySelector('.burger');
let burgerSource = "images/burger.png";
let scrollFlag = false;

window.addEventListener('scroll', () => {
    let newScrollPosition = window.pageYOffset;
    if (scrollPosition === newScrollPosition) {
        for (const header of headers) {
            if (!burgerFlag) {
                header.classList.remove('scrolled');
                logo.src = "images/logo.png";
                burgerSource = burger.src = "images/burger.png";
            }
        }
        scrollFlag = false;
    } else {
        for (const header of headers) {
            if (!burgerFlag) {
                header.classList.add('scrolled');
                logo.src = "images/logo-dark.png";
                burgerSource = burger.src = "images/burger-dark.png";
            }
        }
        scrollFlag = true;
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

let burgerFlag = false;
burger.addEventListener('click', () => {
    if (!burgerFlag) {
        burgerFlag = true;
        burger.src = "images/burger-active.png";
        burger.style.transform = 'rotate(180deg)';
        for (const header of headers) {
            header.style.transform = 'none';
            header.classList.add('scrolled');
        }
    } else {
        burgerFlag = false;
        burger.src = burgerSource;
        burger.style.transform = 'rotate(360deg)';
        for (const header of headers) {
            header.style.transform = 'translate(0, -210px)';
            if (!scrollFlag) header.classList.remove('scrolled');
        }
    }
})
