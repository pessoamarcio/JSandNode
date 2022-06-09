//resolvendo com filter e com push;
var ar = [-5,10,19,20,-3,89].filter(positivo => positivo > 0);
var positivo = ar;
console.log(positivo);

var ar = [-5,10,19,20,-3,89].filter(negativo => negativo <0);
var negativo = ar;
console.log(negativo);

var num = [-5,10,19,20,-3,89];
function numerosPositivos(num){
    var pos = [];
    for(var i = 0; i < num.length; i++){
        if(num[i] > 0){
            pos.push(num[i]);
        }
    }return pos;
}
console.log(numerosPositivos(num));

function numerosNegativos(num){
    var pos = [];
    for(var i = 0; i < num.length; i++){
        if(num[i] < 0){
            pos.push(num[i]);
        }
    }return pos;
}
console.log(numerosNegativos(num));