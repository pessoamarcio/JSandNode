/*Faça um algaratimo que leia 3 números e que armazene uma variavel o maior dos três*/

var n1 = 1;
var n2 = 7;
var n3 = 3;
var maior = 0;

if ((n1 >= n2) && (n1 >= n3)) {
maior = n1;
} else if((n2 >= n1) && (n2 >= n3)) {
maior = n2;
} else if((n3 >= n1) && (n3 >= n2)) {
maior = n3;
};
console.log("Maior: " + maior);


/*<script> outra forma, usando JS
NUM1 = 0;
NUM2 = 0;
NUM3 = 0;
MAIOR = 0;
NUM1 = Number(window.prompt("Digite o primeiro número: "));
NUM2 = Number(window.prompt("Digite o segundo número: "));
NUM3 = Number(window.prompt("Digite o terceiro número: "));
if (NUM1 > NUM2) && (NUM1 > NUM3)
MAIOR = NUM1;
if (NUM2 > NUM1) && (NUM2 > NUM3)
MAIOR = NUM2;
if (NUM3 > NUM1) && (NUM3 > NUM2)
MAIOR = NUM3;
document.write("O maior número é: ", MAIOR)
</script>*/
