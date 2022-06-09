var pais = "Brasil";
if(pais != "Brasil"){    //se o pais for diferente de Brasil, executa a condição abaixo;
    console.log("Você é estrangeiro.");
}else{
    console.log("Você é brasileiro");
}

var idade = 17;
if(idade < 16){                          //se a idade for maior que 16 execulta "else if", se for menor, executa console;
    console.log("Você não vota.");
} else if(idade < 18 || idade > 65){     //se a idade for menor que 18 ou menor q 65, executa console, caso não passa ao "else";
    console.log("Voto opcional.");
}else{
    console.log("Voto é obrigatorio.");
}