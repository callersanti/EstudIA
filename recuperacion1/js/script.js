const crearInput = () => {
    let i = 1;
    container.innerHTML = "";
    let number = Number(document.getElementById("number").value)

    if (number <= 0) {
        let result = document.getElementById("result")
        result.innerHTML =  "El número de notas a ingresar debe ser mayor a 0.";
    }else{
        while (i <= number) {
            container.innerHTML += 
            `<input type="number" id="nota${i}" placeholder="Nota ${i}" required> <br>`;
            i++;
        }

        let boton = document.getElementById("calcular")
        boton.style.display = "inline-block"
        result.innerHTML =  "";
    }
    

}

const calcularNotas = () => {

    let number = Number(document.getElementById("number").value)
    let suma = 0;
    //console.log(number)

    for (let i = 1; i <= number; i++) {
        let horas = Number(document.getElementById("nota" + i).value)
        suma += horas;
    }
    //console.log(suma)

    let total = suma / number;
    let result = document.getElementById("result")
    result.innerText = `El promedio de notas es: ${total}`;

}




