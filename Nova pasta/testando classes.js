class Pessoa{  //as classes irão ser nome e idade;
    nome;
    idade;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`; //não sei porque não imprime, visto que ficou igual.
    }
}
const p1 = new Pessoa("Márcio", 37);
console.log(p1.apresentar);
console.log(p1);
console.log(p1.nome);
console.log(p1.idade);
console.log(JSON.stringify(p1)); //para ficar um JSON
console.log(Object.keys(p1));    //Valor chave dos objetos
console.log(Object.values(p1));  //valor dos objetos
for(let attrib in p1){          //testando um for para verificação de atributo com "for in"
    console.log(p1[attrib],attrib);
}
