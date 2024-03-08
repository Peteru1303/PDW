"use strict";
let my_array;
my_array = [1, 2, 3, 4, 5, 6, 7, 8];
function maior(lista) {
    let j = 1;
    let res = 0;
    while (j < lista.length) {
        if (lista[j] > lista[j - 1])
            res = lista[j];
        j++;
    }
    return res;
}
console.log(maior(my_array));
let my_number;
my_number = 4;
function parcheck(numero) {
    if (numero % 2 == 0) {
        console.log('true');
    }
    else
        console.log('false');
}
parcheck(my_number);
function media(lista) {
    let j = 0;
    let res = 0;
    while (j < lista.length) {
        res = res + lista[j];
        j++;
    }
    return res / j;
}
console.log(media(my_array));
function uppercase(palavra) {
    return palavra.toUpperCase();
}
console.log(uppercase('aaaaaaaaaaaaaaaaaaaaaa'));
function primo(primoteste) {
    let j = primoteste - 1;
    while (j > 1) {
        if (primoteste % j == 0) {
            console.log('false');
            return;
        }
        j--;
    }
    console.log('true');
    return;
}
primo(4);
console.log(my_array.reverse());
let percent = 50;
function porcentagem_add(base, porcento) {
    return (base * ((porcento / 100) + 1));
}
console.log(porcentagem_add(my_number, percent));
let my_phrase;
my_phrase = ['oi', 'mundo'];
console.log(my_phrase.reverse());
function somapar(lista) {
    let j = 0;
    let res = 0;
    while (j < lista.length) {
        if (lista[j] % 2 == 0) {
            res = res + lista[j];
        }
        j++;
    }
    return res;
}
console.log(somapar(my_array));
function fatorial(fatorial) {
    let j = fatorial - 1;
    let res = fatorial;
    while (j > 1) {
        res = res * (j);
        j--;
    }
    return res;
}
console.log(fatorial(my_number));
