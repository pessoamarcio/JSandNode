//Temperaturas 2 semanas.
var Temperaturas = [{dia: 1, mes:1, tempMin:24, tempMax:29, choveu: false}, 
                 {dia: 2, mes: 1, tempMin:26, tempMax:29, choveu: false}, 
                 {dia: 3, mes: 1, tempMin:26, tempMax:28, choveu: true},
                 {dia: 4, mes: 1, tempMin:25, tempMax:29, choveu: true},
                 {dia: 5, mes: 1, tempMin:24, tempMax:29, choveu: true},
                 {dia: 6, mes: 1, tempMin:26, tempMax:30, choveu: false},
                 {dia: 7, mes: 1, tempMin:27, tempMax:31, choveu: false},
                 {dia: 8, mes: 1, tempMin:27, tempMax:32, choveu: false},
                 {dia: 9, mes: 1, tempMin:26, tempMax:28, choveu: true},
                 {dia: 10, mes: 1, tempMin:24, tempMax:27, choveu: true},
                 {dia: 11, mes: 1, tempMin:24, tempMax:27, choveu: true},
                 {dia: 12, mes: 1, tempMin:24, tempMax:27, choveu: false},
                 {dia: 13, mes: 1, tempMin:24, tempMax:27, choveu: false},
                 {dia: 14, mes: 1, tempMin:24, tempMax:27, choveu: true}];


//Numeros de dias que choveu
function NumdiasQchoveu(Chuvoso){
    let chuvas = 0;
    for(let i= 0; i < Chuvoso.length; i++){
        if(Chuvoso[i].choveu){
            chuvas++;
        };
    };
    console.log("Quantidades de dias que choveu: " + chuvas);
};

//media maxima de temperaturas
function MediaMaxima(Temperaturas){
    let media = 0;
    for(let i=0; i <Temperaturas.length; i++){
        media = media + Temperaturas[i].tempMax;
    }
    let MediaMaxima = media / (Temperaturas.length);
return MediaMaxima;
};
console.log("Media da temperatura maxima: " + MediaMaxima(Temperaturas).toFixed(1));

//Media minima de temperaturas
function MediaMinima(Temperaturas){
    let media = 0;
    for(let i = 0; i < Temperaturas.length; i++){
        media = media + Temperaturas[i].tempMin;
    }
    let MediaMinima = media / (Temperaturas.length);
    ;
return MediaMinima;
};
console.log("Media da temperatura minima: " + MediaMinima(Temperaturas).toFixed(1));

//Ordenação pelo valor de tempMax(Temperatura Maxima) bubbleSort
function OrdenacaoMax(Ordenar) {
    var ORD = Ordenar.length;  
    for (var i = 0; i < ORD; i++) { 
          for (var j = 0; j < (ORD - i - 1); j++) { 
                   if(Ordenar[j].tempMax > Ordenar[j+1].tempMax) {
                           var ADD = Ordenar[j]; 
                Ordenar[j] = Ordenar[j+1]; 
                Ordenar[j+1] = ADD; 
            }
        }        
    }
    return Ordenar;
};


NumdiasQchoveu(Temperaturas);
console.log(Temperaturas);
OrdenacaoMax(Temperaturas);
console.log(Temperaturas);
