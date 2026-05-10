//Nome do herói
let nomeHeroi = "Tormund Giantsbane";

//Quantidade de XP
let xpHeroi = 8090;

//Váriavel para armazenar o nível do herói
let nivelHeroi = "";

//Estrutura de decisão para determinar o nível do herói com base na quantidade de XP
if (xpHeroi <= 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xp <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xp <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xp <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xp <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xp <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xp <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";

}

//Saída de dados
console.log(" O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);