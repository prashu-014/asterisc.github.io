
let menuicon = document.getElementById('toggle');
let menuBar = document.getElementById('nav-class');

// click on nav menu than hide navbar
document.addEventListener("click", function (e) {
    if (e.target.id !== 'nav-class' && e.target.id !== 'toggle') {
        menuBar.classList.remove("menu-active");
    }
})

// click on toggle show the navbar
menuicon.addEventListener("click", function () {

    menuBar.classList.toggle("menu-active");

})



// Dark Mode Code
let sunIcon = document.querySelector(".sun");

sunIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        sunIcon.src = "image/sunny.png"

    }
    else {
        sunIcon.src = "image/half-moon.png"
    }

})


// animation 

ScrollReveal({
    reset: true,
    distance: '5px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.name, .about-name,.social-icon,.hire-text,.profie,.footer-form', { delay: 500, origin: 'left' });

ScrollReveal().reveal('.front-de, .btn, .welcome-text', { delay: 600, origin: 'bottom' });

ScrollReveal().reveal('.land-photo,.about-image,.experi-text,.hire-image,.project-card,.contact-text,.box', { delay: 700, origin: 'right' });

ScrollReveal().reveal('.about-text,.project-title', { delay: 800, origin: 'top' });


ScrollReveal().reveal('', { delay: 500, origin: 'top' });





