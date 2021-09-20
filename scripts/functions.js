'use strict';

let frase = 'Esto es una frase.';

function letras(frase) {
    //devuelve el número de letras de la cadena pasada como parámetro (sólo un número).

    //El caracter /s representa los espacios en blanco.
    //El caracter /g indica que haga el reemplazo multiples veces.

   return frase.replace(/\s/g, '').length;
}

function palabras(frase) {
    //devuelve el número de palabras de la cadena pasada como parámetro (sólo un número).

    return frase.length;
}

function maysc(frase) {
    //devuelve la cadena pasada como parámetro convertida a mayúsculas.

    return frase.toLocaleUppercase();
}

function titulo(frase){
    //devuelve la cadena pasada como parámetro con la primera letra de cada pañabra convertida a mayúsculas

}

function letrasReves(frase){
    //devuelve la cadena pasada como parámetro al revés.

    let fraseInvertida = "";
    let a = frase.length;

    while(a>=0){

        fraseInvertida += frase.charAt(a);
        a--;
    }
    return fraseInvertida;
}

function palabrasReves(frase){
    //Devuelve true si la cadena pasada como parámetro es un palíndromo y false si no lo es. Para ello no se tendrán en cuenta espacios en blanco ni la capitalización de las letras.

    return frase.split(' ').reverse().join(' ');
}

function palindromo(frase){
    //devuelve true si la cadena pasada como parámetro es un palíndromo y false si no lo es. Para ello no se tendrán en cuenta espacios en blanco ni la capitalización de las letras

    let fraseNormal = frase.split(' ').join('');
    let fraseInvertida = letrasReves(frase.split(' ').join(''));

    let result = fraseNormal == fraseInvertida ? "Sí es un palíndromo" : "No es un palíndromo";

    return result;
}



module.exports = {
    letras,
    palabras,
    maysc,
    titulo,
    letrasReves,
    palabrasReves,
    palindromo
}
