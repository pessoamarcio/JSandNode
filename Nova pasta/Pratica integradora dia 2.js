 // Relatorio Mensal das Temperaturas em Pernambuco;

 //usuario faz a inclusão dos dados diariamente;
var diarias = [32, 28, 26, 29, 33, 28, 36, 34, 33, 34, 35, 33, 31, 30, 29, 27, 
                28, 29, 30, 31, 28, 26, 27, 30, 31, 30, 29, 30, 29, 26];  

function Temp(diarias){
    var regisdia = [];
    for(var i = 0; i < diarias.length; i++){
        if(diarias[i] > 30){
            regisdia.push(diarias[i]);
        }
    }return regisdia;
};
console.log("Temperatura diarias registradas no sistema dentro do mês: ." + diarias);
console.log("As temperaturas a cima de 30 graus deste mês foram: " + Temp(diarias));


//media das temperaturas dentro do mês cadastrado no sistema pelo usuario;
function TOTAL(diarias) {
    var i = 0, summ = 0, rec = diarias.length;
    while (i < rec) {
        summ = summ + diarias[i++];
    };
    return summ / rec;
};
var Media_Mes = TOTAL(diarias);
console.log("A media de temperatura deste mês é: " + Media_Mes.toFixed(1));

//Maior e menor temperatuda do mês
Maxima = Math.max.apply(Math, diarias);
Minima = Math.min.apply(Math, diarias);
console.log("A Maior temperatura do mês foi: " + Maxima);
console.log("A menor temperatura do mês foi: " + Minima);