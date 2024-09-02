//Exercicio 1 e 2

// let idade = parseInt(prompt("Digite a idade do motorista:"));
// let habilitado = prompt(
//   " O motorista possui Hablitação ? (S/N):"
// ).toUpperCase();

// if (idade < 0) {
//   document.write("Idade inválida! Digite um número inteiro positivo.");
// } else if (idade >= 18) {
//   if (habilitado === "S") {
//     document.write("Motorista é Habilitado,Pode dirigir!.");
//   } else {
//     document.write("Motorista não pode dirigir, ele não é Habilitado.");
//   }
// } else {
//   document.write("Motorista Menor de Idade.");
// }

//Exercicio 3

// let numeroDia = parseFloat(prompt("Digite um numero de 1 a 7:"));

// if (numeroDia === 1) {
//   console.log("Domingo :)");
// } else if (numeroDia === 2) {
//   console.log("Segunda :)");
// } else if (numeroDia === 3) {
//   console.log("Terça :)");
// } else if (numeroDia === 4) {
//   console.log("Quarta :)");
// } else if (numeroDia === 5) {
//   console.log("Quinta :)");
// } else if (numeroDia === 6) {
//   console.log("Sexta :)");
// } else if (numeroDia === 7) {
//   console.log("Sábado :)");
// } else {
//   console.log("Número inválido! Digite um número de 1 a 7.");
// }

//Exercicio 4

// let numeroDia = parseFloat(prompt("Digite um numero de 1 a 7:"));

// switch (numeroDia) {
//   case 1:
//     console.log("Domingo :)");
//     break;
//   case 2:
//     console.log("Segunda :)");
//     break;
//   case 3:
//     console.log("Terça :)");
//     break;
//   case 4:
//     console.log("Quarta :)");
//     break;
//   case 5:
//     console.log("Quinta :)");
//     break;
//   case 6:
//     console.log("Sexta :)");
//     break;
//   case 7:
//     console.log("Sábado :)");
//     break;
//   default:
//     console.log("Número inválido! Digite um número de 1 a 7.");
//     break;
// }

//Exercicio 5

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//Exercicio 6

// let html = "<ul>";

// for (let i = 1; i <= 30; i++) {
//   let numeroImpar = 2 * i - 1;
//   html += `<li>${numeroImpar}</li>`;
// }

// html += "</ul>";

// document.write(html);

//exercicio 7

// let soma = 0;
// let numero = 10;
// do {
//   soma += numero;
//   numero++;
// } while (numero <= 100);

// document.write("Soma de todos os numero de 10 entre 100 é: " + soma);

// exercicio 8

// let salario = 2000.0;
// let mensagem;
// if (salario < 1903.98) {
//   mensagem = "Isento de IR";
// } else {
//   mensagem = "Tributado no IR";
// }

// document.write(`<h1>${mensagem}</h1>`);

//exercicio 9

// let numero = 20;

// let primo = true;

// if (numero <= 1) {
//   primo = false;
// } else if (numero <= 3) {
//   primo = true;
// } else if (numero % 2 === 0 || numero % 3 === 0) {
//   primo = false;
// } else {
//   for (let i = 5; i * i <= numero; i += 6) {
//     if (numero % i === 0 || numero % (i + 2) === 0) {
//       primo = false;
//       break;
//     }
//   }
// }
// if (primo) {
//   console.log(`${numero} é um número primo.`);
// } else {
//   console.log(`${numero} não é um número primo.`);
// }

// exercicio 10

// let altura = 1.75;
// let sexo = 2;

// let pesoIdeal;

// if (sexo === 1) {
//   pesoIdeal = 62.1 * altura - 44.7;
// } else if (sexo === 2) {
//   pesoIdeal = 72.7 * altura - 58;
// } else {
//   pesoIdeal = "Sexo inválido";
// }

// console.log(`Peso Ideal: ${pesoIdeal}`);

// exercicio 11

// let turno = prompt(
//   "Digite o turno em que você estuda (M para matutino, V para vespertino, N para noturno):"
// );

// switch (turno.toUpperCase()) {
//   case "M":
//     alert("Bom dia!");
//     break;
//   case "V":
//     alert("Boa tarde!");
//     break;
//   case "N":
//     alert("Boa noite!");
//     break;
//   default:
//     alert("Valor inválido");
//     break;
// }

//exercicio 12

// let idade = parseInt(prompt("Digite sua idade:"));

// if (idade >= 18 && idade <= 67) {
//   alert("Você pode doar sangue.");
// } else {
//   alert("Você não pode doar sangue.");
// }

//exercicio 13

// let numero = parseInt(prompt("Digite um número:"));

// for (let i = 1; i <= numero; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// exercicio 14

// let numero = parseInt(prompt("Digite um número:"));
// let soma = numero;

// while (soma < 500) {
//   soma *= 3;
// }

// console.log(`O último valor é: ${soma}`);

//exercicio 15
// let A = parseFloat(prompt("Digite o valor do lado A:"));
// let B = parseFloat(prompt("Digite o valor do lado B:"));
// let C = parseFloat(prompt("Digite o valor do lado C:"));

// if (A < B + C && B < A + C && C < A + B) {
//   if (A === B && B === C) {
//     console.log("O triângulo é equilátero.");
//   } else if (A === B || A === C || B === C) {
//     console.log("O triângulo é isósceles.");
//   } else {
//     console.log("O triângulo é escaleno.");
//   }
// } else {
//   console.log("Os valores fornecidos não formam um triângulo.");
// }

// exercicio 16

// let anoAtual = 2024;
// let anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
// let idade = anoAtual - anoNascimento;

// if (idade >= 16) {
//   console.log("Você pode votar este ano.");
// } else {
//   console.log("Você não pode votar este ano.");
// }

//exercicio 17

// let totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
// let votosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
// let votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
// let votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

// if (votosBrancos + votosNulos + votosValidos > totalEleitores) {
//   console.log(
//     "Erro: A soma dos votos brancos, nulos e válidos não pode exceder o número total de eleitores."
//   );
// } else {
//   let percentualBrancos = (votosBrancos / totalEleitores) * 100;
//   let percentualNulos = (votosNulos / totalEleitores) * 100;
//   let percentualValidos = (votosValidos / totalEleitores) * 100;

//   console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
//   console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
//   console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
// }

//exercicio 18

// let precoTabela = parseFloat(prompt("Digite o preço de tabela:"));
// let numParcelas = parseInt(prompt("Digite o número de parcelas:"));

// let precoTotal;
// let valorParcela;

// if (numParcelas === 1) {
//   precoTotal = precoTabela * (1 - 0.025); // Desconto de 2,5%
//   valorParcela = precoTotal;
// } else if (numParcelas >= 2 && numParcelas <= 5) {
//   precoTotal = precoTabela; // Sem desconto ou acréscimo
//   valorParcela = precoTotal / numParcelas;
// } else if (numParcelas >= 6 && numParcelas <= 10) {
//   precoTotal = precoTabela * (1 + 0.06); // Juros de 6%
//   valorParcela = precoTotal / numParcelas;
// } else if (numParcelas >= 11 && numParcelas <= 15) {
//   precoTotal = precoTabela * (1 + 0.13); // Juros de 13%
//   valorParcela = precoTotal / numParcelas;
// } else {
//   console.log(
//     "Número de parcelas inválido. Aceitamos apenas de 1 a 15 parcelas."
//   );
// }

// if (numParcelas >= 1 && numParcelas <= 15) {
//   console.log(`Preço total da compra: R$ ${precoTotal.toFixed(2)}`);
//   console.log(`Valor de cada parcela: R$ ${valorParcela.toFixed(2)}`);
// }
