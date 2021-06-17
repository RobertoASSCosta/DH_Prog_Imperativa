setTimeout ( function(){
    console.log('Olá Mundo!');
}, 1000)

let minhaCallback = ( ) => console.log('Olá Mundo!');
setTimeout(minhaCallback, 1000);
