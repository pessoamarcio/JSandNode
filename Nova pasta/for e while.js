var carros = [
{id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 45000, creat: 123242342},
{id: 2, modelo: 'Punto', marca: 'Fiat', preco: 120000, creat: 112123221}  
];
    for(var i = 0; i < carros.length; i++){   //utilizando o for
 total =+ carros[i].preco;
    console.log(total);
    };

    for(const i in carros){     //"for in" é a forma mais reduzida de "for";
    total =+ carros[i].preco;
    console.log(total);
    };

for(const carro of carros){
    total =+ carro.preco
    console.log(total);
}