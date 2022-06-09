var agora = new Date();
var diasemana = agora.getDay();
/* Para o JS este são os dias da semana.
0 = Domingo, 1= segunda, 2= terça, 3= quarta, 4= quinta, 5= sexta, 6= sábado.*/

console.log(diasemana);
switch(diasemana){
    case 0: console.log("Domingo");
    break
    case 1: console.log("Segunda");
    break
    case 2: console.log("Terça");
    break
    case 3: console.log("Quarta");
    break
    case 4: console.log("Quinta");
    break
    case 5: console.log("Sexta");
    break
    case 6: console.log("Sabado");
    break
    default: console.log("[ERRO] Dia invalido!");
    break
};