function soma(){

    let numero_1 = parseInt(document.getElementById('numero1').value);
    let numero_2 = parseInt(document.getElementById('numero2').value);

    let soma_numero = numero_1 + numero_2

    document.getElementById('resultado').textContent = 'resultado:' + soma_numero;

}
function subtrai(){

    let numero_1 = parseInt(document.getElementById('numero1').value);
    let numero_2 = parseInt(document.getElementById('numero2').value);

    let subtrai = numero_1 - numero_2

    document.getElementById('resultado').textContent = 'resultado:' + subtrai;

}