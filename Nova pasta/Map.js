var numeros = [1,2,3,4,5,6,7,8,9,10];
var num = numeros.map(function(valor){  //usando o map para multiplicar cada elemento do array por 2;
    return valor *2;
});
console.log(num);

var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
];
var nomes = funcionarios.map(pessoa => pessoa.nome); // funçao para retornar o nome.
console.log(nomes);

