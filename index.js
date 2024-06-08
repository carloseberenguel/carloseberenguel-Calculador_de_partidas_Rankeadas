function saudacao() {
    console.log('Olá seja bem-vindo a Calculadora de partidas Rankeadas, Iniciando...!')
}
saudacao()

let NomeJogador = "Carlos" 
let Nivel =""

function score(vitorias, derrotas) {
    return vitorias - derrotas;
}

let saldoVitoria = score(50, 25);
if (saldoVitoria < 10){
    Nivel = "Ferro"
}else if (saldoVitoria >= 11 && saldoVitoria <= 20){
    Nivel = "Bronze"
}else if (saldoVitoria >= 21 && saldoVitoria <= 50){
    Nivel = "Prata"
}else if (saldoVitoria >= 51 && saldoVitoria <= 80){
    Nivel = "Ouro"
}else if (saldoVitoria >= 81 && saldoVitoria <= 90){
    Nivel = "Diamante"
}else if (saldoVitoria >= 91 && saldoVitoria <= 100){
    Nivel = "Lendario"
}else if (saldoVitoria >= 101){
    Nivel = "Imortal"
}
console.log(`O Heroi ${NomeJogador} tem de saldo de ${saldoVitoria}, está no nivel ${Nivel}.`);

function criadopor() {
    console.log('Criado por: Carlos Eduardo Berenguel. Finalizado com sucesso.')
}
criadopor()

