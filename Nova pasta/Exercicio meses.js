//Faça um array de todos os meses do ano  e faça 4 array que corresponde a cada trimesmtre;

let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

//usando filter para resolver

let trimestre1 = meses.filter((item, index) => {
    return (index <= 2);
});

let trimestre2 = meses.filter((item, index) => {
    return (index > 2 && index <= 5);
});

let trimestre3 = meses.filter((item, index) => {
    return (index > 5 && index <= 8);
});

let trimestre4 = meses.filter((item, index) => {
    return (index > 8 && index <= 11);
});
console.log(trimestre1, trimestre2, trimestre3, trimestre4);