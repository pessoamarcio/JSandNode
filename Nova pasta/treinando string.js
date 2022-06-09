var nome = "Márcio Pessôa";
var x = nome.length;  // para saber o tamanho da string nome;
console.log(x);

resultado = x > 15 ? "Obrigado" : "Por favor preencher o seu nome completo."; //tratando com ternario;
console.log(resultado);


var res = nome.toLocaleUpperCase();  // para colocar o nome todo em caixa alta;
console.log(res)

var jogo = "Barcelona x Real melhor time";
var posicao = jogo.indexOf("Real");  // descobrir a posição da palavra Real na frase a cima. QUe no caso é 12.
console.log(posicao);

var cortado = jogo.slice(0,7);   //corta uma frase. Neste caso cortou do 0 ao 7.
console.log(cortado);

var cortado = jogo.slice(12,);  //outro exemplo. Caso não colocar nada ele vai até o final da frase.
console.log(cortado);