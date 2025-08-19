// script.js
document.addEventListener('DOMContentLoaded', function() { // Escucha el evento 'DOMContentLoaded' para ejecutar el código cuando el DOM esté completamente cargado
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm'); // Obtiene el formulario de contacto por su ID
    const formNote = document.getElementById('formNote'); // Obtiene el elemento donde se mostrarán las notas del formulario por su ID
    
    if (contactForm) { // Verifica si el formulario de contacto existe
        contactForm.addEventListener('submit', function(e) { // Escucha el evento 'submit' del formulario
            e.preventDefault(); // Previene el comportamiento por defecto del formulario (enviar y recargar la página)
            
            const name = document.getElementById('name').value.trim(); // Obtiene el valor del campo de nombre y elimina espacios en blanco
            const email = document.getElementById('email').value.trim(); // Obtiene el valor del campo de correo y elimina espacios en blanco
            const message = document.getElementById('message').value.trim(); // Obtiene el valor del campo de mensaje y elimina espacios en blanco
            
            if (!name || !email || !message) { // Verifica si alguno de los campos está vacío
                formNote.textContent = 'Por favor completa todos los campos.'; // Muestra un mensaje de error si hay campos vacíos
                formNote.style.color = '#EF4444'; // Cambia el color del texto del mensaje de error a rojo
                return; // Sale de la función si hay campos vacíos
            }
            
            // Simulación de envío
            formNote.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.'; // Muestra un mensaje de agradecimiento
            formNote.style.color = '#10B981'; // Cambia el color del texto del mensaje de agradecimiento a verde
            contactForm.reset(); // Reinicia el formulario después de enviar
            
            // Limpiar mensaje después de 5 segundos
            setTimeout(() => { // Establece un temporizador para ejecutar la función después de 5 segundos
                formNote.textContent = ''; // Limpia el mensaje de la nota del formulario
            }, 5000); // 5000 milisegundos (5 segundos)
        });
    }
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => { // Selecciona todos los enlaces que comienzan con '#' (enlaces internos)
        anchor.addEventListener('click', function(e) { // Escucha el evento 'click' en cada enlace
            e.preventDefault(); // Previene el comportamiento por defecto del enlace (navegar a la sección)
            
            const targetId = this.getAttribute('href'); // Obtiene el atributo 'href' del enlace (ID del objetivo)
            const targetElement = document.querySelector(targetId); // Selecciona el elemento objetivo usando el ID
            
            if (targetElement) { // Verifica si el elemento objetivo existe
                window.scrollTo({ // Desplaza la ventana a la posición del elemento objetivo
                    top: targetElement.offsetTop - 80, // Establece la posición superior, restando 80 píxeles para un margen
                    behavior: 'smooth' // Aplica un desplazamiento suave
                });
            }
        });
    });
    
    // Animación al hacer scroll
    const animateOnScroll = function() { // Define una función para animar elementos al hacer scroll
        const elements = document.querySelectorAll('.feature-card, .tech-column, .team-card'); // Selecciona los elementos que se animarán
        
        elements.forEach(element => { // Itera sobre cada elemento seleccionado
            const elementPosition = element.getBoundingClientRect().top; // Obtiene la posición del elemento en relación con la ventana
            const screenPosition = window.innerHeight / 1.2; // Calcula la posición de la pantalla (1.2 veces la altura de la ventana)
            
            if (elementPosition < screenPosition) { // Verifica si el elemento está visible en la pantalla
                element.style.opacity = '1'; // Cambia la opacidad del elemento a 1 (visible)
                element.style.transform = 'translateY(0)'; // Restablece la transformación para que el elemento esté en su posición original
            }
        });
    };
    
    // Configurar elementos animados
    const animatedElements = document.querySelectorAll('.feature-card, .tech-column, .team-card'); // Selecciona los elementos que se animarán
    animatedElements.forEach(element => { // Itera sobre cada elemento seleccionado
        element.style.opacity = '0'; // Establece la opacidad inicial a 0 (invisible)
        element.style.transform = 'translateY(20px)'; // Aplica una transformación para mover el elemento 20 píxeles hacia abajo
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Aplica una transición suave a la opacidad y transformación
    });
    
    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('load', animateOnScroll); // Ejecuta la función de animación al cargar la ventana
    window.addEventListener('scroll', animateOnScroll); // Ejecuta la función de animación al hacer scroll
});
