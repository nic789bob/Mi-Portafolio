document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previene el comportamiento de anclaje predeterminado del navegador

        // Obtiene el ID de la sección a la que se debe desplazar
        const targetId = this.getAttribute('href');

        // Busca el elemento con ese ID
        const targetElement = document.querySelector(targetId);

        // Si el elemento existe, se desplaza a él suavemente
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Esta es la propiedad clave para el desplazamiento suave
            });
        }
    });
});