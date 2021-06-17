setTimeout ( function(){
    console.log('Olá Mundo!');
}, 3000)

let saudacaoCallback = ( ) => console.log('Olá Mundo!');
setTimeout(saudacaoCallback, 3000);
