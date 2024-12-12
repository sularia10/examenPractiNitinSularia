// Este script añade un mensaje en la consola y cambia el color del fondo al hacer clic en el título

// Función para mostrar un mensaje en la consola
function mostrarMensaje() {
    console.log("¡Bienvenido al Proyecto Web!");
}

// Función para cambiar el color de fondo del sitio
function cambiarColorFondo() {
    document.body.style.backgroundColor = "#f0f8ff"; // Color de fondo azul claro
}

// Ejecutar las funciones cuando el documento esté listo
document.addEventListener("DOMContentLoaded", function() {
    mostrarMensaje();

    // Agregar un evento al hacer clic en el título
    const titulo = document.querySelector("h1");
    titulo.addEventListener("click", cambiarColorFondo);
});

