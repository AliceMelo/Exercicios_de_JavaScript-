/*Desafio
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

 */
var valor = Array(5);
var i;
var posi, neg, par, impar;



for( i =0 ; i < valor.length; i++){
    valor[i] = parseInt(gets());
}

posi = valor.filter(value => value > 0);
neg = valor.filter(value => value < 0);
par = valor.filter(value => value % 2 == 0);
impar = valor.filter(value => value % 2 != 0);

console.log(par.length + " valor(es) par(es)");
console.log(impar.length + " valor(es) impar(es)");
console.log(posi.length + " valor(es) positivo(s)");
console.log(neg.length + " valor(es) negativo(s)");