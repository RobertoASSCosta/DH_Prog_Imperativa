//Calculo IMC
function imc (peso, altura){
    return (peso/(altura*altura)).toFixed(2);
}
console.log('IMC= '+imc(80, 1.7));
