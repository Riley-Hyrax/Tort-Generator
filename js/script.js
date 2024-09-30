document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.querySelector('.hamburger-menu');
    const navItems = document.querySelector('.nav-items');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navItems.classList.toggle('active');

    });
    
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1500,  // Animation duration (in milliseconds)
    });
    
    // Background Image Cycling
    const images = [
        'url(img/slide-1.jpg)',
        'url(img/slide-2.jpg)',
        'url(img/slide-3.jpg)',
        // Add more images as needed
    ];
    
    let currentIndex = 0;
    const hero = document.querySelector('.hero-section');
    
    function changeBackground() {
        // Start fading out
        hero.classList.remove('fade-in');
        hero.classList.add('fade-out');
    
        setTimeout(() => {
            // Change the background image after fading out
            hero.style.backgroundImage = images[currentIndex];
    
            // Start fading in
            hero.classList.remove('fade-out');
            hero.classList.add('fade-in');
    
            currentIndex = (currentIndex + 1) % images.length; // Cycle through images
        }, 500); // Adjust this time to match the duration of the fade-out
    }
    
    // Change background every 5 seconds
    setInterval(changeBackground, 5000);
    
    // Set initial background
    changeBackground();
});
