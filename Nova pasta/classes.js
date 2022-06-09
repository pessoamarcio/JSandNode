class Pessoa{                           //daqui 
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log("Olá " + this.nome);
    }
    get nomeCompleto(){
        console.log("Olá, tudo bem? " + this.nome + " " + this.sobrenome); //para incluir a concatenação dos objetos.
    }
}                                         //até aqui é a função que define a classe.
p1 = new Pessoa("Márcio", "Rogério");     //Gravou o primeiro e segundo nome na memoria do construtor.
p1.falar();                               //usou o console dentro da função para exprimir os novos nomes gravados.
p1.nomeCompleto;                          //com get não precisa de parenteses.
