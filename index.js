document.addEventListener('DOMContentLoaded', () => {
    console.log('I am alive');

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simple validation
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate form submission
        alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
        contactForm.reset();
    });

    // Booking form submission
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const service = bookingForm.service.value;
        const date = bookingForm.date.value;
        const time = bookingForm.time.value;

        if (!service || !date || !time) {
            alert('Please complete all booking details.');
            return;
        }

        // Simulate booking submission
        alert(`Thank you for booking the ${service} service on ${date} at ${time}. We look forward to serving you!`);
        bookingForm.reset();
    });

    // Signup button click
    const signupBtn = document.getElementById('signup-btn');
    signupBtn.addEventListener('click', () => {
        alert('Signup functionality coming soon!');
    });
});
