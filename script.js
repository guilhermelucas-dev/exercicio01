
const numberOne = Number(prompt("Digite o primerio número:"));
const numberTwo = Number(prompt("Digite o segundo número:"));

alert("A soma dos dois números é: " + (numberOne + numberTwo));
alert("A subtração dos dois números é: " + (numberOne - numberTwo));
alert("A multiplicação dos dois números é: " + (numberOne * numberTwo));
alert("A divisão dos dois números é: " + (numberOne / numberTwo));
alert("O resto da divisão dos dois números é: " + (numberOne % numberTwo));

if (((numberOne + numberTwo) % 2) == 0) {
  alert("A soma dos dois números é par: " + (numberOne + numberTwo));
} else {
  alert("A soma dos dois números é ímpar: " + (numberOne + numberTwo));
}

if (numberOne != numberTwo) {
  alert("Os dois números inseridos são diferentes.");
} else {
  alert("Os dois números inseridos são iguais.");
}
