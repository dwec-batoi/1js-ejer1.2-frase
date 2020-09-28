'use strict'

let frase = prompt('Introducir una frase');
if (frase != null) {
	console.log('letras: '+letras(frase) + ' y palabras: '+palabras(frase));
	console.log('maysc: '+maysc(frase));
	console.log('titulo: '+titulo(frase));
	console.log('letrasReves: '+letrasReves(frase));
	console.log('palabrasReves: '+palabrasReves(frase));
	console.log('Es palindromo: '+palindromo(frase));
}