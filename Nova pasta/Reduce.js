var numeros = [1,2,3,4,5,6,7,8,9,10];
var total = 0;
for (var i = 0; i < numeros.length; i++){  //calculando com o 'for';
    total += numeros[i];
}
console.log(total);

var tot = numeros.reduce(function(tot, numeros){  //usando o metodo de 'reduce';
    return tot + numeros;
}, 0);
console.log(tot);

