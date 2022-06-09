var nome = {
    primeironome: 'Márcio',
    segundonome: 'Pessôa'
};
console.log(nome['segundonome']);       //chamando o objeto;

var pessoa1 = new Object();            //outra forma de char o objeto;
pessoa1.nome = "Yara";
pessoa1.sobrenome = "Nascimento";
pessoa1.falarNome = function(){          //esse é outro modo, mas pode ficar sem a função e chamar na linha 14;
    console.log("Nome é: " + this.nome);
};
console.log(pessoa1.falarNome());      // chamando a função;
console.log(pessoa1.nome);             //pode fazer sem a função;

function criarPessoa(nome, sobrenome){
    return {nome, sobrenome};
}
var p1 = criarPessoa("Márcio", "Rogério");
var p2 = criarPessoa("Yara", "Nascimento");
console.log(p1);