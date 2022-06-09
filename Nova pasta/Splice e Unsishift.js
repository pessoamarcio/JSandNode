var arr2 = [ 1,2,3,4,5,6];
console.log(arr2);
arr2.splice(1,1);  //qual é a posição a ser tirada? "1". A partir do posição escolhida, quantas posições você quer tirar? "1";
console.log(arr2);
arr2.splice(2,3);  //tirando a segunda posição e mais 2;
console.log(arr2);

var nomes = ["Maria","Márcio","Rogério","Silva","Pessôa"];
console.log(nomes);
var novos = nomes.splice(1,1,"Nene");  // Ele vai trocar o Márcio por Nene;
console.log(novos);  //mostra que ele tirou o Márcio;
console.log(nomes);  //vai mostrar a alteração dos nomes;
var novamente = nomes.splice(1,2,"Marcos","Ronaldo"); //alterando 2 elementos do Array;
console.log(novamente);
console.log(nomes);  //mostrando os nomes com as novas alterações;

var pais = ["Brasil","Argentina","Colombia"];
console.log(pais);
pais.unshift("Uruguai");   //cria mais 1 elemento ao array no inicio;
console.log(pais);
