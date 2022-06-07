window.addEventListener('DOMContentLoaded', event => {
    const bootstrap = require('bootstrap');
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

window.addEventListener('scroll', ()=>{
    let currentScroll = window.pageYOffset;
    if(currentScroll > 0){
        document.querySelector('.about').classList.remove('active');
    }
    if(currentScroll > 353 && currentScroll <= 1244){
        document.querySelector('.about').classList.add('active');
       
    }
    if(currentScroll > 0){
        document.querySelector('.projects').classList.remove('active');
    }
    if(currentScroll > 1244 && currentScroll <= 2176){
        document.querySelector('.projects').classList.add('active');
    }
    if(currentScroll > 0){
        document.querySelector('.contacts').classList.remove('active');
    }
    if(currentScroll > 2176 && currentScroll <= 2673){
        document.querySelector('.contacts').classList.add('active');
    }
})

