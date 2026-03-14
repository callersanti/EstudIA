const generarFactura = () => {
    let productos = ["Laptop", "Mouse", "Teclado", "Monitor"];
    let precios = [2500000, 50000, 12000, 800000];
    let cantidades = [1, 2, 3, 5];

    //console.log(productos,precios,cantidades);

    generarDetalle(productos, precios, cantidades);

}
    
const generarDetalle=(productos, precios, cantidades) => {
    //console.log("Hola, soy el detalle de la factura", productos, precios, cantidades);
    let detalle = document.getElementById("detalle");

    for (let i=0; i < productos.length; i++) {
        let subtotal = precios[i] * cantidades[i];

        detalle.innerHTML += `
            <tr>
                <td>${productos[i]}</td>
                <td>${precios[i]}</td>
                <td>${cantidades[i]}</td>
                <td>${subtotal}</td>
            </tr>`;

    }

}



