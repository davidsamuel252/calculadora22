function calculo(){

let C = parseInt(document.getElementById('primeiro_numero').value);
let I = parseInt(document.getElementById('segundo_numero').value);
let T = parseInt(document.getElementById('terceiro_numero').value);
I = I/100;
let soma_numero = C * I * T;
document.getElementById("resultado").textContent= 'total dos juros é: ' + soma_numero;
let M = parseInt(document.getElementById('quarto_numero').value);
M = soma_numero + C;
let soma_numero2 = M;
document.getElementById("quarto_numero").textContent= 'e o montante:' + soma_numero2;
}