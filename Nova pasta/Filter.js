var numeros = [1,2,3,4,5,6,7,8,9,10];
var r2 = numeros.filter(valor => valor > 5);  // é outra forma de fazer, mas resumida;
console.log(r2);


var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]
var pessoas = funcionarios.filter(
    function(valor){
        console.log(valor.nome);
});

var pessoas = funcionarios.filter(
        function(valor){
            return valor.nome.length <5;  //ele irá pegar apenas os nomes com tamanho maior que 5;
});
console.log(pessoas);
