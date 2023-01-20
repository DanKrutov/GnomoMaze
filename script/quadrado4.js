mapa1 = [
    0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
    0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,
    0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,
    0,0,2,1,1,1,1,1,1,4,4,4,1,1,1,1,1,1,2,0,0,
    0,0,2,2,2,2,2,2,2,0,0,0,2,2,2,2,2,2,2,0,0,
    0,0,0,0,0,0,0,0,2,6,6,6,2,0,0,0,0,0,0,0,0,
    3,3,3,3,3,3,3,3,2,6,6,6,2,3,3,3,3,3,3,3,3,
    1,1,3,3,3,3,3,3,2,6,6,6,2,3,3,3,3,3,3,3,3,
    0,1,0,0,0,0,0,0,2,6,6,6,2,0,0,0,0,0,0,0,0,
    0,1,0,0,0,0,0,0,0,6,6,6,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,1,0,0,6,6,6,6,6,6,6,6,6,6,6,6,
    0,0,0,0,0,0,1,0,0,6,6,6,6,6,6,6,6,6,6,6,6,
    0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
];
mapa2 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,1,5,0,0,0,1,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,
    1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,
    1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,
    1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,
    1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,
    1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,
    1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,
    1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,
    1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,4,4,4,1,1,1,1,1,1,1,1,1,
]

caixaMapa1 = [
    390, 420, //caixa 1
    360, 420, //caixa 2
    360, 390, //etc...
    360, 450,
    330, 420,
];
caixaMapa2 = [
    360, 450,
    360, 480,
    330, 480,
    390, 420,
    210, 450,   
    30, 270, 
];

pos1 = [390, 300];
pos2 = [150, 300];
gnomoEncontrado = false;
function iniciaNpc(){
    
    posiNovax = posiAtualx = Math.ceil($('#bot').position().left);
    posiNovay = posiAtualy = Math.ceil($('#bot').position().top);
    gnomoX = Math.ceil($('#minino').position().left);
    gnomoY = Math.ceil($('#minino').position().top);
    var ooh = new Audio('audio/ooh.mp3');
    movDecisao();

    if(posiNovay<450 && posiNovay>=0 && posiNovax<630 && posiNovax>=0){ 
        if(colisao(posiNovax, posiNovay, direcao, false)){
            $('#bot').css({top: posiNovay});
            $('#bot').css({left: posiNovax});
            if(posiNovax == gnomoX && posiNovay == gnomoY){
                $("#tela").append('<div id="screamer"></div>');
                ooh.playbackRate=0.1;
                ooh.play();
                gnomoEncontrado = true;
            }
        }
    }
    
    if(!gnomoEncontrado){
        setTimeout(iniciaNpc, 700);
    }
}

function movDecisao(){
    gnomoX = Math.ceil($('#minino').position().left);
    gnomoY = Math.ceil($('#minino').position().top);

    if(gnomoX > posiAtualx){
        posiNovax = posiAtualx + 30;
        direcao = "dir";
    }
    else if(gnomoX < posiAtualx){
        posiNovax = posiAtualx - 30;
        direcao = "esq";
    }
    if(gnomoY > posiAtualy){
        posiNovay = posiAtualy + 30;
        direcao = "baixo";
    }
    else if(gnomoY < posiAtualy){
        posiNovay = posiAtualy - 30;
        direcao = "cima";
    }
}

function carregarMapa(mapa, pos, caixaMapa){
    //limpa mapa antigo
    $('#tela').empty();

    //carrega novo mapa
    for(i=0; i<mapa.length; i++){
        $("#tela").append('<div class="quad'+mapa[i]+'"></div>');
    }

    //carrega caixas
    for(i=0; i<caixaMapa.length; i=i+2){
        x = caixaMapa[i];
        y = caixaMapa[i+1];
        $("#tela").append('<div class="caixa" style="top:'+x+'; left:'+y+';"></div>');
    }

    //carrega player
    $("#tela").append('<div id="minino"></div>');
    $('#minino').css({top: pos[0], left: pos[1]});
    $("#tela").append('<div id="bot"></div>');
    $('#bot').css({top: 360, left: 90});
    mapaAtual = mapa;
}

function atualizacoord(x, y) {
    $('#coordx').val(x/30);
    $('#coordy').val(y/30);
}   

document.onkeydown = function(e) {
    switch(e.which) {
        case 37 || 65:
            move('esq');
        break;
        case 38 || 87: 
            move('cima')
        break;
        case 39 || 68: 
            move('dir');
        break;
        case 40 || 83:
            move('baixo') 
        break;
        default: return;
    }
    e.preventDefault();
};

function move(direcao){
    posiNovax = posiAtualx = Math.ceil($('#minino').position().left);
    posiNovay = posiAtualy = Math.ceil($('#minino').position().top);
    

    if(direcao =="esq"){
        posiNovax = posiAtualx - 30;
        $('#minino').addClass('flipped');
    }
    if(direcao =="dir"){
        posiNovax = posiAtualx + 30;
        $('#minino').removeClass('flipped');
    }
    if(direcao =="cima"){
        posiNovay = posiAtualy - 30;
    }
    if(direcao =="baixo"){
        posiNovay = posiAtualy + 30;
    }

    //impede de sair do mapa
    if(posiNovay<450 && posiNovay>=0 && posiNovax<630 && posiNovax>=0){ 
        if(colisao(posiNovax, posiNovay, direcao, true)){
            $('#minino').css({top: posiNovay});
            $('#minino').css({left: posiNovax});
            atualizacoord(posiNovax, posiNovay);
        }
    }
}

//metodo de colisao com paredes e teleportes
function colisao(posiNovax, posiNovay, direcao, joojador){
    var colisaoExiste
    var ooh = new Audio('audio/ooh.mp3');
    //empurre de caixa
    $('.caixa').each(function(){
        if(posiNovax == Math.ceil($(this).position().left) && posiNovay == Math.ceil($(this).position().top)){
            if(joojador){
                caixaPosiNovax = caixaPosiAtualx = Math.ceil($(this).position().left);
                caixaPosiNovay = caixaPosiAtualy = Math.ceil($(this).position().top);

                if (direcao == 'esq'){
                    caixaPosiNovax = caixaPosiAtualx - 30;
                }
                else if(direcao == 'dir'){
                    caixaPosiNovax = caixaPosiAtualx + 30;
                }
                else if(direcao == 'cima'){
                    caixaPosiNovay = caixaPosiAtualy - 30;
                }
                else if(direcao == 'baixo'){
                    caixaPosiNovay = caixaPosiAtualy + 30;
                }

                if(caixaPosiNovay<450 && caixaPosiNovay>=0 && caixaPosiNovax<630 && caixaPosiNovax>=0){
                    if(colisao(caixaPosiNovax, caixaPosiNovay, direcao, false)){
                        $(this).css({left: caixaPosiNovax});
                        $(this).css({top: caixaPosiNovay});
                        ooh.play();
                    }else{
                        colisaoExiste = true;
                    }
                }else{
                    colisaoExiste = true;
                }
            }else{
                colisaoExiste = true;
            }
        }
    });
    $('.quad1').each(function(){
        if(posiNovax == Math.ceil($(this).position().left) && posiNovay == Math.ceil($(this).position().top)){
            colisaoExiste = true;
        }
    });
    $('.quad3').each(function(){
        if(posiNovax == Math.ceil($(this).position().left) && posiNovay == Math.ceil($(this).position().top)){
            colisaoExiste = true;
        }
    });
    $('.quad4').each(function(){
        if(posiNovax == Math.ceil($(this).position().left) && posiNovay == Math.ceil($(this).position().top)){
            if (mapaAtual == mapa2){
                carregarMapa(mapa1, pos2, caixaMapa1);
            }else{
                carregarMapa(mapa2, pos1, caixaMapa2);
            }
            colisaoExiste = true;
        }
    });
    $('.quad5').each(function(){
        if(posiNovax == Math.ceil($(this).position().left) && posiNovay == Math.ceil($(this).position().top)){
            if(!joojador){
                //aparentemente o jquery não consegue ler caracteres especiais, precisei colocar o cod. do caractere...
                $("#tela").append('<div id="alerta">ALERTA: Bot&#227o Ativado!</div>');
            }
        }
    });
    if(colisaoExiste){
        return false;
    }else{
        return true;
    }
}    

carregarMapa(mapa1, pos1, caixaMapa1);