var pessoa = ["Eduardo","Joana","Wallace","Rosana"];
var pessoas1 = pessoa.slice(1,3);  //ele copia uma parte do array e retorna com um novo;
console.log(pessoa);     //original;
console.log(pessoas1);   //novo array;

var gerente = ["David", "Elisa"];  //irei acrescentar 2 elementos ao array;
var empresa = pessoa.concat(gerente); //concatenando os elementos do array pessoa ao gerente;
console.log(empresa);
