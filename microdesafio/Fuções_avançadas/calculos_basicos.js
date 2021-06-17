// Usando callback para calculos matemáticos.
let soma = (a, b) => a + b;

let sub = (a, b) => a - b;

let mult = (a, b) => a * b;

let div = (a, b) => a / b;

let modulo = (a, b) => a % b;

let calcular = (n1, n2, callback) => callback(n1, n2);

// Usando callback ja declarada.
console.log(calcular(39, 18, soma));

// Construindo callback dentro dos parâmetros.
console.log(calcular(39, 18, (x, y) => x + y ));