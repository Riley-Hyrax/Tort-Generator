document.addEventListener('DOMContentLoaded', function() {
    
    
   

    // Your other scroll event code...
    window.addEventListener('scroll', function() {
        var whiteNavbar = document.querySelector('.white-navbar');
        var blueNavbar = document.querySelector('.blue-navbar');
        var whiteNavbarBottom = whiteNavbar.getBoundingClientRect().bottom;
        

        if (whiteNavbarBottom <= 0) {
            blueNavbar.style.position = 'fixed';
            blueNavbar.style.top = '0'; // Stick to the top
            blueNavbar.style.left = '0'; // Full width
            blueNavbar.style.width = '100%'; // Full width
            blueNavbar.style.opacity = '1'; // Fully visible
        } else {
            blueNavbar.style.position = 'absolute';
            blueNavbar.style.top = '100px'; // Original top position
            blueNavbar.style.left = '10%'; // Original left position
            blueNavbar.style.width = '80%'; // Original width
            blueNavbar.style.opacity = '1'; // Fully visible
        }


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
