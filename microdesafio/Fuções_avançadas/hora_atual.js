//Especificando a hora atual que mostra no relógio do seu computador.
let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ':' + data.getMinutes();
}

console.log(horaAtual());