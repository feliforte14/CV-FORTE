function cambiarColorHeader() {
        const header = document.querySelector(".header");
        const botonCambiarColor = document.getElementById("cambiar-color-btn");
        const botones = document.querySelectorAll(".btn");
    
        if (header && botonCambiarColor) {
            botonCambiarColor.addEventListener("click", function() {
                header.style.backgroundColor = "black";
                botones.forEach(boton => {
                    boton.style.backgroundColor = "black";
                });
            });
        } 
    }
    
    cambiarColorHeader();
    