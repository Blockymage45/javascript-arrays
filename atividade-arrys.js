const notas = [7.0, 8.5, 6.0, 4.0];

notas.pop();

notas.push(10);

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

const media = soma / notas.length;

console.log(`Array atualizado: ${notas}`);
console.log(`Média: ${media.toFixed(2)}`);
