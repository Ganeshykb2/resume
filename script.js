document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.5 // Adjust this value as needed
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Remove observer once the animation is done
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
});
