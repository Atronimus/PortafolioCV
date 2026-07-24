function crearEstrellas(contenedor, cantidad, tamañoMin, tamañoMax) {

    for (let i = 0; i < cantidad; i++) {

        const estrella = document.createElement("div");

        estrella.classList.add("star");

        const tamaño = Math.random() * (tamañoMax - tamañoMin) + tamañoMin;

        estrella.style.width = tamaño + "px";
        estrella.style.height = tamaño + "px";

        estrella.style.left = Math.random() * 100 + "%";
        estrella.style.top = Math.random() * 100 + "%";

        estrella.style.animationDelay = Math.random() * 5 + "s";

        contenedor.appendChild(estrella);

    }

}

crearEstrellas(document.getElementById("stars"), 120, 1, 2);
crearEstrellas(document.getElementById("stars2"), 90, 2, 3);
crearEstrellas(document.getElementById("stars3"), 50, 3, 5);