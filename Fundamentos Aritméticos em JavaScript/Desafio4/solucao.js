/*Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.*/

let valor = parseInt(gets());
let notasdisp = [100, 50, 20, 10, 5, 2, 1];
let numnotas = [0, 0, 0, 0, 0, 0, 0];
let resto = valor;
let nota;

while (resto >= 1) {
  
  nota = notasdisp.findIndex(value => value <= resto);
  numnotas[nota] = Math.trunc(resto / notasdisp[nota]);
  resto = resto % notasdisp[nota];

}

console.log(valor);
console.log(numnotas[0] + " nota(s) de R$ 100,00");
console.log(numnotas[1] + " nota(s) de R$ 50,00");
console.log(numnotas[2] + " nota(s) de R$ 20,00");
console.log(numnotas[3] + " nota(s) de R$ 10,00");
console.log(numnotas[4] + " nota(s) de R$ 5,00");
console.log(numnotas[5] + " nota(s) de R$ 2,00");
console.log(numnotas[6] + " nota(s) de R$ 1,00");