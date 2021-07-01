const tabuada= require('./tabuada');
const operacoes= require('./operacoes');

function calcula(a,b,acao)
{
    switch (acao)
    {
        case '+': console.log(operacoes.soma(a,b));
        break;
        case '-': console.log(operacoes.subtracao(a,b));
        break;
        case '/': console.log(operacoes.divisao(a,b));
        break;
        case '*': console.log(operacoes.divisao(a,b));
        break;
        case 't': tabuada(a);
        break;
    }
}
calcula (5, 6,'+');