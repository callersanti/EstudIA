/* //Funcion flecha
function saludar=() => {
    console.log("¡Hola Campistas!");
}

saludar();

//Funcion flecha con un parametro
mostrarNumero=n1 => {
    console.log(n1*2);
}

mostrarNumero(2); 

//Funcion flecha con varios parametros

sumar = (n1,n2) => console.log(n1+n2);

function suma1(n1,n2) {
    return n1+n2;
}

const resultado = console.log(sumar(2,3));

//Funciones flecha con llaves
const calcular = (a,b) => {
    let resultado = a*b;
    return resultado;
}

console.log(calcular(2,3));

//Retornar Obtetos
const crearUsuario = () => 
    {
        nombre: "Santi"
        apelldo: "Calle"
        direccion: "Calle 123"
        celular: "1234567890"
    }
console.log(crearUsuario()); */

const calcularArea=() => {
    const base = Number(document.getElementById("base").value);
    const altura = Number(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");

    if(base <= 0 || altura <= 0) {
        resultado.textContent = "La base y la altura deben ser números positivos.";
        return;
    }

    const area = (base * altura) / 2;
    resultado.textContent = `El área del triángulo es: ${area}`;
}
    




