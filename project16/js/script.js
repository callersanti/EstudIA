//Usa el while si no sabes cuántas veces se usa
//Inicialización, condición, actualización
/*
let number = 1
while (number <= 10) {
    console.log(number);
    number++;
}
*/

const contar = () => {

    let limite = Number(document.getElementById("limite").value);
    document.getElementById("result").innerHTML = ejecutarWhile(limite);

}


const ejecutarWhile = (limite) => {

    let i = 1;
    let texto = "";
    let cum = 0;

    while (i <= limite) {
        texto += `${cum+=i} <br>`;
        i++;
    }

    return texto;

}

/* Proyecto:
Simulador:
Un campista quiere ahorrar dinero
Cada mes ahorra una cantidad fija.
El sistema debe mostrar cuántos meses  necesita para llegar a una meta.

Condiciones de evaluación:
con ciclo while
debe tener 2 funciones arrow function
subir a GitHub
input 1: meta
input 2: cuanta plata ahorra cada mes
*/