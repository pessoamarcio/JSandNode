/*Faça um algoritmo que efetue o cálculo da quantidade de litros de combustível gastos
em uma viagem, sabendo que o carro faz 12km com um litro. Deverão ser fornecidos o
tempo gasto na viagem e a velocidade média. O algoritmo deverá apresentar os valores
da velocidade média, tempo gasto, distância percorrida e a quantidade de litros 
ultilizados na viagem*/

var litros = 0;
var tempo = 50;
var velocidade = 100;
var distancia = tempo * velocidade;
litros = distancia / 12;

console.log("A velocidade média foi de " + velocidade + ", com o tempo gasto de " + tempo + "h, a distancia total foi de " 
+ distancia + "km, e gastou o total de litros " + litros.toFixed(1) + "L");
//.toFixed(1) faz com que só tem 1 casa decimal. Para aumentar o número de casas basta aumentar o nome entre parenteses.