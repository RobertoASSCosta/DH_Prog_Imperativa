function podeSubir(altura, permissao){
    if (altura > 1.40 && altura <= 2.0){
        console.log("Acesso Autorizado.");
        return true;
    } else if (altura >=1.2 && altura <= 1.40 && permissao == true){
        console.log("Deve estar acompanhada");
        return true;
    } else{
        console.log("Acesso Negado");
        return false;
    }
}
podeSubir(1.2, false)