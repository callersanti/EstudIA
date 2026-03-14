// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}
    
function calcular() {

    let n1 = parseFloat(document.getElementById("n1").value)
    let n2 = parseFloat(document.getElementById("n2").value)

    let result = sumar(n1, n2);

    document.getElementById("result").textContent = "Resultado: " + result
}

document.getElementById("btnSum").addEventListener("click", calcular);




