// Alterando elementos do array.

const nomes = ['James', 'Marivaldo', 'Matheus', 'Gustavo', 'Roberto'];

function alter (array) {
    for(let i = 0; i < array.length ;i++) {
        array[i] = array[i] + ' estudando focado!';
    }
}

alter(nomes);
console.log(nomes.join(', '));