/* function saludar() {
    console.log("Hola, campista");
}
    
function sumar(a,b){
    console.log("La suma es:", a + b);
}

function restar(a,b){
    console.log("La resta es:", a - b);
}

function multiplicacion(a,b){
    console.log("La multiplicación es:", a * b);
}

function division(a,b){
    console.log("La división es:", a / b);
}*/

function sumar(a,b){
    let suma = a + b;
    let resta = a - b;
    return { //array, object
        suma: suma,
        resta: resta
    }
}

let resultado = sumar(5,3);
console.log("La suma es:", resultado.suma);
console.log("La resta es:", resultado.resta);

document.getElementById("mensaje").textContent = resultado.suma;