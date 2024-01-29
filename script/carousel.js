const carousel = document.querySelector(".carousel-container");
const button = document.querySelectorAll(".carousel-button");

button.forEach((element, i) => {
    button[i].addEventListener("click", () => {
        let posicion = i;
        let operacion = posicion * -25;
        carousel.style.transform = `translateX(${operacion}%)`;
        button.forEach((element, i) => {
            button[i].classList.remove("activo");
        });
        button[i].classList.add("activo");
    });
});
