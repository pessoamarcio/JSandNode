/*Faça um algoritmo onde o usuário informa um número e o algoritmo verifica se o 
mesmo é divisivel por 10, por 5, por 2 ou se não é divisível por nenhum deles.*/

var a1 = 20;
if(a1 % 10 == 0 && a1 % 5 == 0 && a1 % 2 == 0){
console.log("É divisível por 2, 5 e 10.");
}else {
console.log("Não é divisivel pelos 3.");
};

/*outra forma de fazer
if(numero%10 == 0) {
    console.log(numero + " é divisível por 10");
    }else {
    console.log(numero + " não é divisível por 10")
    };
    if(numero%5 == 0) {
    console.log(numero + " é divisível por 5");
    }else {
    console.log(numero + " não é divisível por 5")
    };
*/