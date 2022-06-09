class eletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log("Já está ligado.")
            return;
        };
        this.ligado = true;
    }
}

class SmartPhone extends eletronico{   //extends é para aproveitar a construção acima (herança)
    constructor(nome, cor, modelo){
        super(nome);                //para setar ao nome da classe.
        this.cor = cor;             //passa o valor para o construtor
        this.modelo = modelo;       //passa o valor para o construtor
    };
};
var Z1 = new SmartPhone("Motorola", "Preto", "One Hyper")  //aplicando os valores
console.log(Z1);
Z1.ligar();                         //ficou desligado.
Z1.ligar();                         //Agora ligou. :)
