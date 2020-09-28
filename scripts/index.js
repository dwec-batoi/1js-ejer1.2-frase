'use strict'

var frase = window.prompt('Introduce una frase: ');

if ( frase === '' ){

    console.error( 'Introduce una frase.' );
} else {

    console.log( letras(frase) + ' letras y ' + palabras(frase) + ' palabras.' + '\n' +
        maysc(frase) + '\n' + titulo(frase) + '\n' + letrasReves(frase) + '\n' + palindromo(frase)
    
    );
    
}
