// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicialización del carrusel
    initCarousel();

    // Inicialización del formulario de reservas
    initReservaForm();

    // Añadir efecto de desvanecimiento a elementos con la clase 'fade-in'
    addFadeInEffect();
});

// Función para inicializar el carrusel
function initCarousel() {
    const carousel = document.getElementById('carousel');
    if (!carousel) return;

    // Aquí puedes añadir la lógica para el carrusel
    // Por ahora, solo añadiremos algunas imágenes de ejemplo
    const images = [
        'img/experiencia1.jpg',
        'img/experiencia2.jpg',
        'img/experiencia3.jpg'
    ];

    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function updateCarousel() {
        carousel.style.backgroundImage = `url(${images[currentIndex]})`;
    }

    // Cambia la imagen cada 5 segundos
    setInterval(showNextImage, 5000);

    // Muestra la primera imagen
    updateCarousel();
}

// Función para inicializar el formulario de reservas
function initReservaForm() {
    const form = document.getElementById('reserva-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Aquí puedes añadir la lógica para enviar el formulario
        // Por ahora, solo mostraremos un mensaje de confirmación
        alert('¡Gracias por tu reserva! Te contactaremos pronto para confirmar los detalles.');

        // Limpia el formulario
        form.reset();
    });

    // Poblar el select de experiencias
    const experienciasSelect = form.querySelector('select[name="experiencia"]');
    if (experienciasSelect) {
        const experiencias = [
            'La Pausa Infinita',
            'Ecos del Silencio',
            'Tiempo Suspendido'
        ];

        experiencias.forEach(exp => {
            const option = document.createElement('option');
            option.value = exp;
            option.textContent = exp;
            experienciasSelect.appendChild(option);
        });
    }
}

// Función para añadir efecto de desvanecimiento
function addFadeInEffect() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
    });
}

// Función para manejar la navegación suave
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Añadir navegación suave a todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});
