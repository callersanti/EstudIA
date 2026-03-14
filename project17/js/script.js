/* Proyecto:
Simulador:
Un campista quiere ahorrar dinero
Cada mes ahorra una cantidad fija.
El sistema debe mostrar cuántos meses  necesita para llegar a una meta.

Condiciones de evaluación:
con ciclo while
debe tener 2 funciones arrow function
subir a GitHub
input 1: meta
input 2: cuanta plata ahorra cada mes
*/


const calcularMeses = () => {

    let goal = Number(document.getElementById("goal").value);
    let saving = Number(document.getElementById("saving").value);
    document.getElementById("result").innerHTML = ejecutarWhile(goal, saving);
    //result.textContent = `Para alcanzar tu meta de $${goal} ahorrando $${saving} cada mes,
     // necesitarás: ${Math.ceil(goal/saving)} meses.`;
}


/* const ejecutarWhile = (goal, saving) => {
    goalMonths = goal / saving; 
    let i = 1;
    let texto = "";
    let cum = 0;

    if (saving >= goal) {
        texto = "Tu meta ya se ha alcanzado en el primer mes, no es necesario ahorrar más.";
    }else if (saving <= 0) {
        texto = "La cantidad que ahorras cada mes debe ser un número positivo.";
    }else if (goal <= 0) {
        texto = "La meta debe ser un número positivo.";
    }else{
        while (i <= goalMonths) {
        cum += saving;
        texto += `Mes ${i}: $${cum} <br>`; 
        
        i++;
        }
    }
    
    return texto;

} */

/* const ejecutarWhile2 = (goal, saving) => {
    goalMonths = goal / saving; 

    let texto = "";
    let cum = 0;

    if (saving >= goal) {
        texto = "Tu meta ya se ha alcanzado en el primer mes, no es necesario ahorrar más.";
    }else if (saving <= 0) {
        texto = "La cantidad que ahorras cada mes debe ser un número positivo.";
    }else if (goal <= 0) {
        texto = "La meta debe ser un número positivo.";
    }else{
        texto += `La cantidad de meses para alcanzar la meta es: ${goalMonths} <br>`; 
        
        }

    return texto;
} */

    
const ejecutarWhile3 = (goal, saving) => {
    
    let i = 0;
    let texto = "";
    let ahorro = 0;

    if (saving >= goal) {
        texto = "Tu meta ya se ha alcanzado en el primer mes, no es necesario ahorrar más.";
    }else if (saving <= 0) {
        texto = "La cantidad que ahorras cada mes debe ser un número positivo.";
    }else if (goal <= 0) {
        texto = "La meta debe ser un número positivo.";
    }else{
        while (ahorro < goal) {
        ahorro += saving;
        texto += `Mes ${i}: $${ahorro} <br>`; 
        i++;
        }

        let sobrante = ahorro - goal;
        let fraccionMes = sobrante / saving;
    }
    
    return texto;

}
