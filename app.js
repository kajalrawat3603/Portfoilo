const projectItems = document.querySelectorAll('.pro');
const eduItems = document.querySelectorAll('.edu');
const aboutItems = document.querySelectorAll('.aboutinfo');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, options);

projectItems.forEach(item => {
    observer.observe(item);
});

eduItems.forEach(item => {
    observer.observe(item);
});

aboutItems.forEach(item => {
    observer.observe(item);
});

const contactSection = document.getElementById('contact');
const connectHeading = document.querySelector('.connectHeading');

const contactoptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const contactobserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            connectHeading.style.opacity = 1;
            contactForm.style.opacity = 1;
            observer.unobserve(entry.target);
        }
    });
}, options);

contactobserver.observe(contactSection);