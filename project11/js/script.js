

const calcularArea=() => {
    const r = Number(document.getElementById("r").value);
    const h = Number(document.getElementById("h").value);
    const resultado = document.getElementById("resultado");

    if(r <= 0 || h <= 0) {
        resultado.textContent = `Los valores deben ser números positivos.`;
        return;
    } else if (h === r) {
        resultado.textContent = `H y R no pueden ser iguales.`;
        return;
    } else if (h < r) {
        resultado.textContent = `R debe ser menor que H.`;
        return;
    }else{

    const areaTriangulo = r * (Math.sqrt((h**2) - (r**2)));
    console.log(areaTriangulo);
    const areaCancha = areaTriangulo + ((Math.PI*(r**2))/2);
    console.log(areaCancha);
    resultado.textContent = `El área de la cancha es: ${areaCancha}`;
    
    }
}
    




