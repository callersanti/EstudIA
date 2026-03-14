const mostrarLista = () => {
    let productos = ["Leche", "Pan", "Huevos", "Frutas", "Verduras"];
    let lista = document.getElementById("lista");

    for (let i = 0; i < productos.length; i++) {
        lista.innerHTML += `<li>${productos[i]}</li>`;
    }
}
