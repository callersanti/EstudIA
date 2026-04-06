//JSON de productos
const productos = [
    {nombre: "Zanahoria", precio: 200, cantidad: 10, imagen: "./images/carrot.png"},
    {nombre: "Mora", precio: 1000, cantidad: 25, imagen: "./images/blackberry.png"},
    {nombre: "Mango", precio: 2000, cantidad: 20, imagen: "./images/mango.png"},
    {nombre: "Kiwi", precio: 4000, cantidad: 10, imagen: "./images/kiwi.png"},
    {nombre: "Papa", precio: 300, cantidad: 20, imagen: "./images/potato.png"},
    {nombre: "Banano", precio: 500, cantidad: 50, imagen: "./images/banana.png"},
    {nombre: "Cilantro", precio: 100, cantidad: 10, imagen: "./images/cilantro.png"},
    {nombre: "Manzana", precio: 1500, cantidad: 20, imagen: "./images/apple.png"},
    {nombre: "Lechuga", precio: 1000, cantidad: 12, imagen: "./images/lettuce.png"},
    {nombre: "Fresa", precio: 800, cantidad: 20, imagen: "./images/strawberry.png"}
]
    
const mostrarProductos = () => {
    let result = document.getElementById("result")
    //Cabecera de tabla
    let table = `
    <table>
        <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Imagen</th>
        </tr>   
    `
    //Recorrer JSON
    for(let i=0; i<productos.length;i++){
        const p = productos[i]
        let subtotal = p.precio * p.cantidad
        table += `
            <tr>
                <td>${p.nombre}</td>
                <td>$${p.precio.toLocaleString("es-CO")}</td>
                <td>${p.cantidad}</td>
                <td>$${subtotal.toLocaleString("es-CO")}</td>
                <td><img src="${p.imagen}" alt="${p.nombre}" width="25px"</td>
            </tr>
        
        `
        result.innerHTML = `</table> ${table}`
    }
}
/*Tarea
Traer imagen desde url

*/
