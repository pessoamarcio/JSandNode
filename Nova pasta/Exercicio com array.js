//defina um array de 8 números. Acrescente mais um número no array.
//retire a posição 3 e 5 do array. Retire a ultima posição e acrescente um item na primeira posição.

let números = [1,2,3,4,5,6,7,8];

let novo = números.filter((item, index) => {  //usando o filter;
    return !(index == 3 || index == 5);
});

novo.push(22);        // acrescentando um número;

novo.pop();          //retirando a ultimo número;

novo.unshift(12);   //acrescentando na ultima posição;

console.log(novo);