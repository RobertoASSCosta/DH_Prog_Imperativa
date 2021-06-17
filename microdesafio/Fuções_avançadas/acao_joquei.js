// ATENÇÃO ->  Para pleno funcionamento do programa execute pelo NODE, e nao por qualquer extenção
//             Antes de executar limpe o seu terminal


let andar = (time, movimento) => {
    console.log('O jóquei está correndo...');
    
    function andando() {

        let n = 40;
        
        // Define um tempo para interronper o movimento do jóquei.
        let aux = time * n / 4 + 1000;
            
        let andando = setInterval( function (){
            
            console.clear()
            // Cria um array de n elementos preenchidos com espaços.
            let posicao = new Array(n-40).fill(' ');
            
            // Adiciona um jóquei ao final do array.
            posicao.push('🏇');
    
            // Imprime o jóquei na distância n do ponto 0. 
            console.log(posicao.join(''));
    
            // Diminui o comprimento do array para simular o movimento do jóquei.
            n += 4;
    
            
        }, time)
    
        // Interrompe o movimento apos determinado tempo.
        setTimeout(() => {
            clearInterval(andando);
            movimento()
        },aux)
        
    }

    setTimeout(andando, 2000);

}

let parar = () => console.log('O jóquei parou.');

// recebe duas açoes e um espaço de tempo em SEGUNDOS.
function acaoJoquei(time, acao1, acao2) {
    
    time *= 1000; 

    acao1(time, acao2);
}

acaoJoquei(1,andar,parar);