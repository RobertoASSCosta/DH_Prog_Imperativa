/* Compara elementos de um array com elementos de outro array.
Se ouverem nomes iguais nas listade de aprovado e reprovado imprimirá uma mensagem de alerta. */

let aprovados = ['Klayton', 'Dani', 'Olivia', 'Popye'];

let reprovados = ['Pierre', 'Savio', 'Gina', 'Olivia'];

aprovados.forEach(elemX => {
    reprovados.forEach( elemY => {
        if(elemX == elemY) {
            console.log(`Erro nos registros!\nO aluno(a) ${elemX} está presente nas lista de aprovados como de reprovados.`)
        }
    })
}) 
