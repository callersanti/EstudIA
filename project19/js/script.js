const crearInput = () => {
    let i = 1;
    container.innerHTML = "";
    let valor = document.getElementById("valor").value;
    
    if (valor <= 0) {
        let result = document.getElementById("result")
        result.innerHTML =  "El valor de la hora debe ser mayor a 0.";
    }else{
        while (i <= 6) {
            container.innerHTML += 
            `<input type="number" id="horas${i}" placeholder="Horas día ${i}"> <br>`;
    
            i++;
        }
        container.innerHTML += `<button onclick="calcularSueldo()">Calcular sueldo</button>`;
        let result = document.getElementById("result")
        result.innerHTML = "";
    }
}

const calcularSueldo = () => {
    let suma = 0;
    let i = 1;

    while (i <= 6) {
        let horas = Number(document.getElementById("horas" + i).value);
        suma += horas;
        i++;
    }

    let total = suma * Number(document.getElementById("valor").value);
    let result = document.getElementById("result")
    result.innerHTML = `El sueldo total es: 
    ${total.toLocaleString()} por ${suma} horas trabajadas.`;
    

} 

