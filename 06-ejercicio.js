// Colocar una lista en el elemento HTML
// Colocar un boton que diga agregar
// Cada vez que le den click debe agregar a la lista. 

const $boton = document.querySelector("#boton");
const $lista = document.querySelector("#lista");

$boton.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.textContent = "Nuevo elemento"
    $lista.appendChild(listItem);
});
