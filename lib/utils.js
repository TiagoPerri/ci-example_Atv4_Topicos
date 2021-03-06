const random = require('random');

/**ALUNO: TIAGO PERRI GONÇALVES DE OLIVEIRA
 * R.A. 2144190**/


/**
 * O metodo deve receber dois inteiros que representam o inicio e o fim de 
 * um intervalo e retornar um numero aleatorio que se encontra dentro do 
 * intervalo estabelecido, ou seja, [inicio, fim]. Caso o inicio do 
 * intervalo ou o fim do intervalo sejam menor que zero, o metodo deve 
 * retornar -1. O metodo tambem retorna -1 quando o inteiro representando o 
 * inicio do intervalo for maior ou igual ao inteiro representando o fim do
 * intervalo. 
 * **/
 function gerarNumeroAleatorio(inicio, fim) {
    if (inicio < 0 || fim < 0) {
        return -1;
    }

    if (inicio >= fim) {
        return -1;
    }

    const aux = Math.random();
    return aux * (fim - inicio) + inicio;
}

/** 
 * O metodo recebe como entrada um inteiro positivo no intervalo entre 1 e 20, 
 * uma cadeia de caracteres desse comprimento, e um caracter. Caso o comprimento 
 * seja invalido ou o tamanho da cadeia não seja igual ao tamanho passado 
 * como parametro, retornar uma mensagem de erro. Se todos os dados forem válidos,
 *  o metodo deve retornar a posição na cadeia em que o caracter é encontrado pela 
 * primeira vez ou uma mensagem indicando que o caracter não está presente na 
 * cadeia.
 * **/
 function acharCaracter(tamanho, cadeia, c) {
    if (tamanho < 1 || tamanho > 20)
        return "Comprimento inválido!";

    if (cadeia.length !== tamanho)
        return "Ops... O comprimento recebido não é igual ao comprimento real.";

    for (let i = 0; i < cadeia.length; i++) {
        if (c === cadeia.charAt(i))
            return (i + 1);
    }
    return "caracter não encontrado!";
}

module.exports = { gerarNumeroAleatorio, acharCaracter };