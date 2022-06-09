var a = [10,20];                       // fazendo comparação do 'for' com o 'forEach';
for (let valor of a){
    console.log(valor);
};
a.forEach(valor => console.log(valor)); // mostra os elementos do array e comparando com o 'for' acima;

var tot = 0;
var b = [11,20,30,44,55,16,10];
b.forEach(valor => {                   //irá mostrar o valor com a soma de todos elementos;
    tot += valor;
});
console.log(tot);

a.forEach(function(valor,indice,array){   //é a mesma função da primeira 'forEach' acima;
    console.log(array[indice]);
});
