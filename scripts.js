var typed = new Typed(".intro", {
    strings: ["Web Dev. . .", "Full Stack Dev. . .", "", "Freelancer. . ."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    });

const hamburgerMenu = document.querySelector('.ham');

const header = document.querySelector('header')
const menu = document.querySelector('.nav');

hamburgerMenu.addEventListener('click', ()=>{
    header.classList.toggle('header')
    menu.classList.toggle('dropmenu')
})