const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    const total = document.querySelectorAll('.portfolio-detail').length;
    if (index < total - 1) {
        index++;
        arrowLeft.classList.remove('disabled');
        if (index === total - 1) {
            arrowRight.classList.add('disabled');
        }
        activePortfolio();
    }
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
        if (index === 0) {
            arrowLeft.classList.add('disabled');
        }
        activePortfolio();
    }
});

// Contact Form - WhatsApp + Email
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Format message for WhatsApp
        const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
            `*Name:* ${fullName}%0A` +
            `*Email:* ${email}%0A` +
            `*Phone:* ${phone}%0A` +
            `*Subject:* ${subject}%0A` +
            `*Message:* ${message}`;
        
        // Your WhatsApp number (with country code, no + sign)
        const whatsappNumber = '917588982040';
        
        // Create WhatsApp link
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        
        // Format message for Email
        const emailSubject = encodeURIComponent(`Contact Form: ${subject}`);
        const emailBody = encodeURIComponent(
            `New Contact Form Submission\n\n` +
            `Name: ${fullName}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n` +
            `Subject: ${subject}\n` +
            `Message: ${message}`
        );
        
        // Create Email link
        const emailURL = `mailto:kirtiwani24@gmail.com?subject=${emailSubject}&body=${emailBody}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
        
        // Open Email client
        window.location.href = emailURL;
        
        // Show success message
        alert('Message sent! WhatsApp and Email opened.');
        
        // Reset form
        contactForm.reset();
    });
}