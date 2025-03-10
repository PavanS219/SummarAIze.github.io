// Create floating orbs
const orbsContainer = document.querySelector('.floating-orbs');
for (let i = 0; i < 20; i++) {
    const orb = document.createElement('div');
    orb.style.position = 'absolute';
    orb.style.left = `${Math.random() * 100}%`;
    orb.style.top = `${Math.random() * 100}%`;
    orb.style.width = `${Math.random() * 300 + 50}px`;
    orb.style.height = orb.style.width;
    orb.style.borderRadius = '50%';
    orb.style.background = `radial-gradient(circle at center, 
        rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.15),
        transparent 70%)`;
    orb.style.animation = `float ${Math.random() * 10 + 10}s infinite ease-in-out`;
    orb.style.animationDelay = `${Math.random() * 5}s`;
    orbsContainer.appendChild(orb);
}

// Intersection Observer for fade-in elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); }
        25% { transform: translateY(-20px) translateX(10px); }
        50% { transform: translateY(-10px) translateX(-10px); }
        75% { transform: translateY(-30px) translateX(20px); }
    }
`;
document.head.appendChild(style);