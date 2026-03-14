/*

const calcularPromedio = () => {

    let group = Number(document.getElementById("group").value);
    document.getElementById("result").innerHTML = ejecutarWhile(group);
}


const ejecutarWhile = (group) => {
    
    let i = 1;
    let estatura = 0; 

    
while (i <= group) {
        estatura += Number(prompt(`Estatura${i}: `));
        i++;
        }
    let average = estatura / group;

    return average

    //console.log(`Estaturas: ${estatura}`);
    //console.log(`Promedio: ${average}`);

} */
    

const crearInput = () => {
    let quantity = Number(document.getElementById("group").value);
    let container = document.getElementById("container");
    container.innerHTML = "";

    let i = 1;

    while (i <= quantity) {
        container.innerHTML += `
        <input type="number" id="estatura${i}" placeholder="Estatura ${i}">`;
    
        i++;
    }

}

const calcularPromedio = () => {
    let quantity = Number(document.getElementById("group").value);
    let suma = 0;
    let i = 1;

    while (i <= quantity) {
        let estatura = Number(document.getElementById(`estatura${i}`).value);
        suma += estatura;
        i++;
    }

    let average = suma / quantity;
    document.getElementById("result").innerHTML = `El promedio de estaturas es: ${average}`;

}