'use strict'

function letras(cadena) { return cadena.length; }

function palabras(cadena){ return cadena.split(' ').length; }

function maysc(cadena) { return cadena.toUpperCase(); }

/*

 ^\w: toma el primer caracter de la cadena.
 |: condicional OR.
 \s\w: toma el primer caracter después de un espacio en blanco.
 (): captura el patrón.
 g: empareja las ocurrencias.

*/
function titulo(cadena) { return cadena.replace(/(^\w|\s\w)/g, m => m.toUpperCase()); }

function letrasReves(cadena) { 
    
    var cadenaInvertida = '';   var p = cadena.length;

    while (p >= 0) {

        cadenaInvertida = cadenaInvertida + cadena.charAt(p);
        p--;
    }

    return  cadenaInvertida;
}

function palabrasReves(cadena) { return cadena.split(" ").reverse().join(" "); }

function palindromo(cadena) {

    if ( cadena.split(" ").join("").toLowerCase() == letrasReves(cadena).split(" ").join("").toLowerCase()) {

        return 'Sí es un palíndromo';

    } else {

        return 'No es un palíndromo';
    }    
}
