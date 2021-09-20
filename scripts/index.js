'use strict';

const { palabras, maysc, titulo, letrasReves, palabrasReves, palindromo } = require("./functions");

let frase = prompt('Introduce una frase: ');

console.log('Frase: ' + frase);

console.log(letras(frase) + ' letras y ' + palabras(frase) + ' palabras');

console.log(maysc(frase));

console.log(titulo(frase));

console.log(letrasReves(frase));

console.log(palabrasReves);

console.log(palindromo(frase));