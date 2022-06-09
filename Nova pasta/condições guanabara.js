var idade = 18;
if (idade < 16){
    console.log("Menor de idade e não vota.");
} else {
    if(idade >= 16 && idade < 18){
        console.log("Voto opcional");
    }else{
        if(idade => 18 && idade <= 67){
            console.log("Maior de idade, voto obrigatorio.");
        } else if(idade > 67){     //poderia ser usado o if normal. Mas o else if é outra forma reduzida.
                console.log("Maior de idade e voto opcional.");
            };
        
    };
};
