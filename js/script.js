// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Typing effect avec plusieurs titres en rotation
const typingText = document.querySelector('.typing-text');
const titles = [
    'Administrateur d\'Infrastructures Sécurisées',
    'Technicien Support N1','Support de Proximité VIP',
];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentTitle = titles[titleIndex];
    
    if (!isDeleting && charIndex < currentTitle.length) {
        // Phase d'écriture
        typingText.textContent += currentTitle.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    } else if (!isDeleting && charIndex === currentTitle.length) {
        // Pause à la fin avant d'effacer (2 secondes)
        isDeleting = true;
        setTimeout(typeWriter, 2000);
    } else if (isDeleting && charIndex > 0) {
        // Phase d'effacement
        typingText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWriter, 50);
    } else if (isDeleting && charIndex === 0) {
        // Passer au titre suivant
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length; // Boucle sur les titres
        setTimeout(typeWriter, 500);
    }
}

setTimeout(typeWriter, 500);

// Toggle skills categories
document.querySelectorAll('.category-title').forEach(title => {
    title.addEventListener('click', function() {
        const category = this.parentElement;
        category.classList.toggle('active');
    });
});

// Fade in cards on scroll (projets + compétences)
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Observer les cartes de projets
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Observer les catégories de compétences
document.querySelectorAll('.skills-category').forEach(category => {
    observer.observe(category);
});
