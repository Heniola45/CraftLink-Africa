// Header Mobile responsiveness
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const heroButton = document.querySelector('.hero-button');
    
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        heroButton.classList.toggle('active');
    });
});

