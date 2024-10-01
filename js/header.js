const hamburger = document.querySelector('.hamburger-menu');
const navItems = document.querySelector('.nav-items');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navItems.classList.toggle('active');

});