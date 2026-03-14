//let frutas = []

/*frutas[0] = "Banana"
frutas[1] = "Manzana"
frutas[2] = "Naranja"
frutas[3] = "Fresa"
frutas[4] = "Uva" */

/*while(i < 3){

    let fruta = prompt("Ingrese una fruta")
    frutas[i] = fruta
    i++
    
}
    

for(let i=0; i<3; i++){

    let fruta = prompt("Ingrese una fruta")
    frutas[i] = fruta
}


let i=0

do {
    let fruta = prompt("Ingrese una fruta")
    frutas[i] = fruta
    i++
} while (i<3);


console.log(frutas)
*/

//let a = [3,5,7,9,11,13,15,17,19,21]
// let b = [2,4,6]

/* let resultado = [];

for (let i = 0; i< 5; i++) {
    let result = prompt("Ingrese número: ");
    resultado [i] = result
    console.log(resultado[i]) 
}

//console.log(resultado) 

let a = [3,5,7,45,6,78,34,56,98,23]
let promedio = 0;

for (let i = 0; i< a.length; i++) {
    promedio +=  a[i]
}

let promedioTotal = promedio/a.length

console.log(promedioTotal) 
console.log(a.length) 

let a = [4,7,10,3,8]
let pares = 0;

for (let i = 0; i< a.length; i++) {
    if(a[i]%2 === 0){
        pares ++;
    }
}

console.log(`La cantidad de números pares es: ${pares}`)  */



let a = [4,15,8,22,20]
let mayor = a[0];

for (let i = 1; i< a.length; i++) {
    if(a[i]>mayor){
        mayor = a[i];
    }
}

console.log(`El número mayor es: ${mayor}`) 