let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const slidesToShow = 3; // Mostrar 3 comentarios a la vez

function showSlides(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - slidesToShow;
    } else {
        currentSlide = index;
    }

    // Mover el contenedor para mostrar las slides correctas
    const offset = -currentSlide * (100 / slidesToShow);
    document.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlides(currentSlide + 1);
}

function prevSlide() {
    showSlides(currentSlide - 1);
}

// Mostrar la primera slide al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showSlides(currentSlide);
});



// Función para mostrar u ocultar el menú hamburguesa
function toggleMenu() {
    const menuMobile = document.querySelector('.menu-mobile');
    menuMobile.classList.toggle('active');
}




///REVISAR





// Modal para "Ver más"
function openDetailsModal(detailId) {
    const modal = document.getElementById('details-modal');
    const detail = document.getElementById(detailId);
    document.getElementById('details-modal-content').innerHTML = detail.innerHTML;
    modal.style.display = 'block';
}

function closeDetailsModal() {
    const modal = document.getElementById('details-modal');
    modal.style.display = 'none';
}




function redirectToReservaPage(nombreHabitacion, imagen, descripcion, precio, capacidad) {
    localStorage.setItem('habitacionSeleccionada', JSON.stringify({nombre: nombreHabitacion, imagen: imagen, descripcion: descripcion, precio: precio, capacidad: capacidad}));
    window.location.href = 'reservas.html';
}

function openModal(id) {
    var modal = document.getElementById(id);
    var details = JSON.parse(localStorage.getItem('habitacionSeleccionada'));
    document.getElementById('modal-details').innerHTML = `
        <h3>${details.nombre}</h3>
        <img src="${details.imagen}" alt="${details.nombre}">
        <p>${details.descripcion}</p>
        <p>Precio: S/ ${details.precio}</p>
        <p>Capacidad: ${details.capacidad}</p>
    `;
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
