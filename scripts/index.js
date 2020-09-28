'use strict'

var frase = window.prompt('Introduce una frase: ');

if ( frase === '' ){

    console.error( 'Introduce una frase.' );

} else {

    console.log( letras(frase) + ' letras y ' + palabras(frase) + ' palabras.' );
    console.log( maysc(frase) );
    console.log( titulo(frase) );
    console.log( letrasReves(frase) );
    console.log(palabrasReves(frase));
    console.log( palindromo(frase) );

}
