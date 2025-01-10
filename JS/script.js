function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('nav-active');
}


function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(section).classList.add('active');
}

// Función para abrir el modal
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = imageSrc;
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Añadir evento a cada imagen
const images = document.querySelectorAll('.cert-image');
images.forEach(img => {
    img.addEventListener('click', function() {
        openModal(img.src);
    });
});

// Cambiar el color del nav cuando se hace scroll
window.onscroll = function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
};