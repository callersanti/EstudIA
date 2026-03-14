/*Ciclo Do While
1. Si necesitas que se ejecute al menos 1 vez
2.La condición es al final 
3. El usuario debe ingresar datos primero
do {
    //Código a ejecutar
} while (condición);
*/

const iniciar = () => {
    let cantidad = Number(prompt("Notas a ingresar")); //Cambia hasta letras

    if (isNaN(cantidad)) {
        alert("Debes ingresar un número");
    }
    let i = 1;
    let suma = 0;
    do {
        let nota = prompt(`Ingresa la nota ${i}`);
        if(nota.includes(",")){
            alert("No uses comas, usa puntos para decimales");
            return
        }else{
        nota = Number(nota);
        suma += nota;
        }
        i++;
        console.log(nota);
        console.log(typeof nota);
        
    } while (i <= cantidad);

    let promedio = suma / cantidad;
    document.getElementById("resultado").textContent = `El promedio es: ${promedio}`;
}



