/*Faça um algoritmo que leia um número inteiro e que imprima
o seu sucessor e seu antecessor.

Algoritimo de verificar número:
var numero: inteiro
var sucessor: inteiro
var antecessor: inteiro
Inicio 
    Escreva("Informe um número")
    Leia(numero)
    antecessor <- numero -1
    sucessor <- numero +1
    Escreva("O número anterior é ", antecessor,"e o número sucessor é ", sucessor);
Fim */

var numero = 15
var sucessor, antecessor;
antecessor = numero - 1;
sucessor = numero + 1;
console.log("O número anterior é " + antecessor + " e o sucessor é " + sucessor);


