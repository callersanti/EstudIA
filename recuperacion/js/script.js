const tabla = () => {
    let number = Number(document.getElementById("number").value)
    generarTabla(number)
}

const generarTabla=(number)=> {
    
    result.innerHTML = ""

    for (let i = 1; i <= 10; i++) {
        result.innerHTML += `<li>${number} x ${i} = ${number * i}</li>`;
    }
}




