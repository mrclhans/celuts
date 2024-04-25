let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-bars'); 
    menuIcon.classList.toggle('fa-x'); 
    navbar.classList.toggle('active'); 

    
    if (navbar.classList.contains('active')) {
        navbar.style.display = 'flex'; 
    } else {
        navbar.style.display = 'none'; 
    }
});



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});


menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');