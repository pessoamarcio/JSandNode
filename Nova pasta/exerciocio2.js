/*O custo de um carro novo ao consumidor é a soma dos custos de fabricação com a porcentagem
do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que  o porcentual do
distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fabrica
de um carro, calcular e escrever  o custo final ao consuidor.

Algoritmo Custo do Carro:
var custoCarro: inteiro;
var custoFabrica: inteiro;
var porcentDist: inteiro;
var imposto: inteiro;
var custoFinal: inteiro;
Inicio
    Escreva("Informe o custo do carro: ");
    leia(custoCarro)
    porcentDist <- custoCarro * 28/100;
    imposto <- custoCarro * 45/100;
    custoFinal <- custoCarro + porcentDist + imposto
    Escreva("O preço final de um carro novo é: ", custoFinal);
Final;*/

var custoCarro = 45500;
var custoFabrica = 0;
var porcentDist, imposto, custoFinal = 0;

porcentDist = custoCarro * 28/100;
imposto = custoCarro * 45/100;
custoFinal = custoCarro + porcentDist + imposto;
console.log("O preço final de um carro novo é: " + custoFinal);
