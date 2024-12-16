let currentSlide = 0;

// Datos de las imágenes, títulos y descripciones
const slides = [
    {
        img: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/05/gta-6-key-art-no-logo.jpg",
        title: "Videojuegos",
        description: "Disfruto explorando mundos digitales y enfrentando retos únicos."
    },
    {
        img: "https://i.ytimg.com/vi/w8iX69RJ1WE/maxresdefault.jpg",
        title: "Fútbol",
        description: "El fútbol me enseña el trabajo en equipo y perseverancia."
    },
    {
        img: "https://static.eldiario.es/clip/503634c1-bb66-4bcb-8c7e-72cc1f617928_twitter-aspect-ratio_default_0.jpg",
        title: "Música",
        description: "La música es mi refugio para relajarme y expresarme."
    }
];

// Cambia la diapositiva
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;

    const carouselContent = document.querySelector(".carousel-content");
    const { img, title, description } = slides[currentSlide];

    carouselContent.innerHTML = `
        <img src="${img}" alt="${title}">
        <h3>${title}</h3>
        <p>${description}</p>
    `;
}
