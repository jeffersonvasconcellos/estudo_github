function verde(){
    limpar();
    document.getElementById("titulo").classList.add('verde');
}

function vermelho(){
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}

function limpar(){
    document.getElementById("titulo").classList.remove('verde');
    document.getElementById("titulo").classList.remove('vermelho');
}