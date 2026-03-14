/*
JSON: Javascript Object Notation
Formato de intercambio de datos basado en texto que 
representa estructuras de datos, siempre se presentan
usando pares: clave - valor y listas 
*/

const persona = {
    nombre: "Ana",
    edad: 20,
    ciudad: "Medellín"
}

const precios = {
    hamburguesa: 22000,
    pizza: 32000,
    gaseosa: 8000
}

let producto = prompt("Ingrese producto: ")
let precio = precios[producto]
console.log(`Precio: ${precio}`)

