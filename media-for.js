const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}
const media = somaDasNotas / notas.length;

console.log(`A média das notas é: ${media}`);
