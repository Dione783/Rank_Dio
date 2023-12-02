let rank = ""
let vitorias;

function calcRank(_vitorias,_derrotas){
    return _vitorias - _derrotas;
}


vitorias = calcRank(106,3)


if(vitorias < 11){
    rank = "Ferro"
}else if(vitorias < 21){
    rank = "Bronze"
}else if(vitorias < 51){
    rank = "Prata"
}else if(vitorias < 81 ){
    rank = "Ouro"
}else if(vitorias < 91){
    rank = "Diamante"
}else if(vitorias < 100){
    rank = "Lendário"
}else if(vitorias >= 101){
    rank = "Imortal"
}

console.log(rank)