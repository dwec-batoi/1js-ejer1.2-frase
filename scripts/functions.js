'use strict'

function letras(cadena) { return cadena.length; }

function palabras(cadena){ return cadena.split(' ').length; }

function maysc(cadena) { return cadena.toUpperCase(); }

function titulo(cadena) { return cadena.charAt(0).toUpperCase(); }

function letrasReves(cadena) { 
    
    var cadenaInvertida = '';   var p = cadena.length;

    while (p >= 0) {

        cadenaInvertida = cadenaInvertida + cadena.charAt(p);
        p--;
    }

    return  cadenaInvertida;
}

function palabrasReves(cadena) { return cadena.reverse(); }

function palindromo(cadena) {

    return 'Sí es un palíndromo';
}
