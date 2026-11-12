alert("Boas vindas");

let nomeJogador = prompt("digite seu nome");

let querJogar = confirm(" Deseja jogar?");

if(querJogar) {
    alert("Boa sorte," + nomeJogador);
    
    let numeroSecreto = 7;

    let numeroDigitado = prompt("Digite um numero:");
} else{
    
} if(numeroDigitado == numeroSecreto) {
    alert("Voce acertou!");

}
else{
    alert("Voce errou");
}