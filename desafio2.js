
let nivel = ["FERRO", "BRONZE", "PARATA", "OURO", "DIAMENTA", "LENDÁRIO", "IMORTAL"]
let saldoRankeadas = calculoRankeadas(114, 55)

function calculoRankeadas(vitorias, derrotas){
    let calculo = vitorias - derrotas
    return calculo
}

if (saldoRankeadas <= 10){
    console.log("O Herói tem de saldo de " + saldoRankeadas + " vitorias e está no nível de " + nivel[0])
} else if (saldoRankeadas === 11 || saldoRankeadas <= 20) {
    console.log("O Herói tem de saldo de " + saldoRankeadas + " vitorias e está no nível de " + nivel[1])
} else if (saldoRankeadas === 21 || saldoRankeadas <= 50){
    console.log("O Herói tem de saldo de " + saldoRankeadas + " vitorias e está no nível de " + nivel[2])
} else if (saldoRankeadas === 51 || saldoRankeadas <=80){
    console.log("O Herói tem de saldo de " + saldoRankeadas + " vitorias e está no nível de " + nivel[3])
} else if (saldoRankeadas === 81 || saldoRankeadas <= 90){
    console.log("O Herói tem de saldo de " + saldoRankeadas + " vitorias e está no nível de " + nivel[4])
} else if (saldoRankeadas === 91 || saldoRankeadas <= 100){
    console.log("O Herói tem de saldo de " + saldoRankeadas + " vitorias e está no nível de " + nivel[5])
}else {
    console.log("O Herói tem de saldo de " + saldoRankeadas + " vitorias e está no nível de " + nivel[6])
}
