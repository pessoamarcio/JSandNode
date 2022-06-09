
function getRandom(min, max) {
    return Math.random() * (max - min + 1) + min;
}

let temp2021 = [];
for (let i = 0 ; i < 10 ; i++){
    temp2021.push(getRandom(-5,35).toFixed(1));
}
console.log("As temperaturas no ano de 2021, foram: ");
console.log(temp2021);