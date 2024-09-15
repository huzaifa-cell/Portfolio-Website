function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

document.addEventListener("DOMContentLoaded", function() {
   
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    const certificationsSection = document.querySelector('.certifications');
    const certificationItems = document.querySelectorAll('.certifications li');

    
    function checkScroll() {
        if (isInViewport(certificationsSection)) {
            certificationItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.2}s`;
                item.classList.add('fade-in-up');
            });
            
            window.removeEventListener('scroll', checkScroll);
        }
    }

    window.addEventListener('scroll', checkScroll);
});
