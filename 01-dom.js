// document.write("Hola desde Javascript");

// // Devuelve un arreglo de los elementos que tengan esa etiqueta
// const title = document.getElementsByTagName("h1");
// title[0].innerHTML = "Titulo cambiado desde Javascript";

// const texto = document.getElementById("texto");
// texto.innerHTML = "Este texto está escrito desde Javascript";
// texto.style.background = "blue"
// texto.style.color = "white";

// console.log(texto);
// Obtiene un elemento por id
document.getElementById
// Obtiene todos los elementos de una clase y devuelve un arreglo
document.getElementsByClassName
// Obtiene todos los elementos por nombre y devuelve un arreglo
document.getElementsByName


const texto = document.querySelector("#texto")
texto.textContent = "Estoy escribiendo desde el Javascript";


// Crear elementos html
const div = document.createElement("div");
const body = document.querySelector("body");

body.append(div);   