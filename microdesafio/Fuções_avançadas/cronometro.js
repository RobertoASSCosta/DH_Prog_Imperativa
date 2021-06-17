// Após iniciado o cronometro entra em um Loop infinito. 
function cronometrar () {
let s = 1 ;
    setInterval(() => {
        console.log(s);
        s++;
    }, 1000);
}

cronometrar();