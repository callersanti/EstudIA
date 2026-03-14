const generar = () => {
    let lista = document.getElementById("lista");
    let numero = 1;
    lista.innerHTML = "";

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 1; i <= 20; i++) {
        lista.innerHTML += `<li>${numero} x ${i} = ${numero * i}</li>`;
    }
}
    




