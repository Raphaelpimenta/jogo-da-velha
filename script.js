let jogador = null;
let vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado')
let vencedorSelecionado = document.getElementById('vencedor-selecionado')
//let quadradosss = document.getElementsByClassName('quadrado')

mudarJogador('X')

function escolheQuadrado(id){
    if(vencedor !== null){
        return;
    }

    let quadrado = document.getElementById(id)

    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador)
    checkVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;

}

function checkVencedor(){
    let quadrado1 = document.getElementById(1)
    let quadrado2 = document.getElementById(2)
    let quadrado3 = document.getElementById(3)
    let quadrado4 = document.getElementById(4)
    let quadrado5 = document.getElementById(5)
    let quadrado6 = document.getElementById(6)
    let quadrado7 = document.getElementById(7)
    let quadrado8 = document.getElementById(8)
    let quadrado9 = document.getElementById(9)


    if(checaSequencia(quadrado1, quadrado2, quadrado3)){
        mudaCor(quadrado1, quadrado2, quadrado3)
        mudarVencedor(quadrado1)
        return;
    }

    if(checaSequencia(quadrado4, quadrado5, quadrado6)){
        mudaCor(quadrado4, quadrado5, quadrado6)
        mudarVencedor(quadrado4)
        return;
    }

    if(checaSequencia(quadrado7, quadrado8, quadrado9)){
        mudaCor(quadrado7, quadrado8, quadrado9)
        mudarVencedor(quadrado7)
        return;
    }

    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudaCor(quadrado1, quadrado4, quadrado7)
        mudarVencedor(quadrado1)
        return;
    }

    if(checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudaCor(quadrado2, quadrado5, quadrado8)
        mudarVencedor(quadrado2)
        return;
    }

    if(checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudaCor(quadrado3, quadrado6, quadrado9)
        mudarVencedor(quadrado3)
        return;
    }

    if(checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudaCor(quadrado1, quadrado5, quadrado9)
        mudarVencedor(quadrado1)
        return;
    }

    if(checaSequencia(quadrado3, quadrado5, quadrado7)){
        mudaCor(quadrado3, quadrado5, quadrado7)
        mudarVencedor(quadrado3)
        
    }

    
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCor(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}


function checaSequencia(quadrado1, quadrado2, quadrado3){
    let ehIgual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        ehIgual = true;
    }

    return ehIgual;
}


function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i <= 9; i++){
        let quadrado = document.getElementById(i);
        quadrado.style.background = "#eee";
        quadrado.style.color = "#eee";
        quadrado.innerHTML = "-";
    }

    mudarJogador("X")

}
