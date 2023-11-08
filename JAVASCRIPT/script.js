
        // Obtenemos el encabezado por su clase o ID (supongamos que tiene la clase "header")
const header = document.querySelector(".header");
const botonCambiarColor = document.getElementById("cambiar-color-btn");
      
botonCambiarColor.addEventListener("click", function() { // Agregamos un evento de clic al botón para cambiar el color
header.style.backgroundColor = "black" ; // Cambiamos el color del encabezado
        });

       