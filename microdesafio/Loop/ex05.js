// Imprime 25 termos da série 11 - 22 - 33 - 44, etc.

let lista = new Array(25);

let n = 11;

for(i = 0; i < lista.length; i++) {
    lista[i]= n;
    n += 11;
}

console.log(lista);