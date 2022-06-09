/*Escreva um algoritmo para ler o salário mensal atual de funcionário e o percentual de reajuste.
Calcular e escrever o valor do novo salário.

Algoritmo "Calculo do Salario"
var salarioAtual: inteiro;
var percentual: inteiro;
var aumento: inteiro;
var novoSalario: inteiro

inicio
    escreva("Informe o salário atual");
    leia(salarioAtual);
    Escreva("Informe o percentual de reajuste");
    leia(percentuial);
    aumento <- salarioAtual * percentual/100;
    novoSalario <- salarioAtual + aumento
    escreva("O valor do novo salário é: ");
*/

var salMes = 2250;
var percent = 10;
var aumento;
var novoSal;
aumento = salMes * percent / 100;
novoSal = salMes + aumento;
console.log("O valor do novo salário é: " + novoSal);



