const promptSync = require('prompt-sync');
const prompt = promptSync();

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        return "Erro: Divisão por zero";
    }
} 

function potencia(a, b){
    return a**b
}

function quadrado(a){
    return Math.sqrt(a)
}

function seno(a){
    return Math.sin(a)
}

function coseno(a){
    return Math.cos(a)
}

function tangente(a){
    return Math.tan(a)
}

while (true) {
    let escolha = prompt("Escolha a operação:\n 1. Soma,\n 2. Subtração,\n 3. Multiplicação,\n 4. divisão,\n 5.Power,\n 6.Sqrt,\n 7.Sin,\n 8.Cos,\n 9.Tan \n 10.Sair\n");

    if (escolha === "10") {
        break;
    }

    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));

    if (escolha === "1") {
        console.log("Resultado: ", soma(num1, num2));
    } else if (escolha === "2") {
        console.log("Resultado: ", subtracao(num1, num2));
    } else if (escolha === "3") {
        console.log("Resultado: ", multiplicacao(num1, num2));
    } else if (escolha === "4") {
        console.log("Resultado: ", divisao(num1, num2));
    } else if (escolha === "5"){
        console.log("Resultado: ", potencia(num1, num2))
    } else if (escolha === "6"){
        console.log("Resultado: ",quadrado(num1))
    } else if (escolha === "7"){
        console.log("Resultado: ", seno(num1))
    } else if (escolha === "8"){
        console.log("Resultado: ", coseno(num1))
    } else if (escolha === "9"){
        console.log("Resultado: ",tangente(num1))
    }else {
        console.log("Escolha inválida");
    }

}