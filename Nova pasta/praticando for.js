var carro = [{modelo: "A3", marca: "Audi", ano: "2020"},
            {modelo: "Compass", marca: "Jeep", ano: "2021"}
]
for (let caracteristica in carro){
    console.log(carro[caracteristica]);
}
for(const mar of carro){
    total = mar.marca;
    console.log(total);
}
for(let model of carro){
    console.log(model.modelo);
};