

const calcularArea=() => {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
    const resultado = document.getElementById("resultado");

    if(a <= 0 || b <= 0 || c <= 0) {
        resultado.textContent = "Los valores deben ser números positivos.";
        return;
    }
    if (a < c) {
        resultado.textContent = "El valor de a debe ser mayor o igual que c.";
        return;
    }

    const areaTriangulo = ((a - c)*b) / 2;
    const areaTrapecio = (areaTriangulo + (c * b));
    resultado.textContent = `El área del terreno es: ${areaTrapecio}`;
}
    




