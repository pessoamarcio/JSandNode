function mult(a,b){
    return a * b;
}
var x = mult(2,3);
console.log(x);

function operacao(a, b = 2, c = 4){
    console.log(a + b + c);
}
operacao(2);  // ou se colocar (2,6) o resultado é 12;

function teste(...args){
    console.log(args);
};
teste(2,5,6,8,9)