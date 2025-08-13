// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const formNote = document.getElementById('formNote');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                formNote.textContent = 'Por favor completa todos los campos.';
                formNote.style.color = '#EF4444';
                return;
            }
            
            // Simulación de envío
            formNote.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.';
            formNote.style.color = '#10B981';
            contactForm.reset();
            
            // Limpiar mensaje después de 5 segundos
            setTimeout(() => {
                formNote.textContent = '';
            }, 5000);
        });
    }
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animación al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .tech-column, .team-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configurar elementos animados
    const animatedElements = document.querySelectorAll('.feature-card, .tech-column, .team-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});