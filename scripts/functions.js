'use strict'


function letras(cadena) {

	return cadena.length;

}

function palabras(cadena) {
	
	let palabras = cadena.split(" ");

	return palabras.length;

}

function maysc(cadena) {
	
	return cadena.toLocaleUpperCase();

}

function titulo(cadena) {

	let arrayPalabras = cadena.split(" ");
	let arrayPalabrasCapilatizadas = arrayPalabras.map(palabra => palabra[0].toLocaleUpperCase() + palabra.slice(1));

	return arrayPalabrasCapilatizadas.join(" ");

}

function letrasReves(cadena) {
	
	let cadenaLetrasReves = cadena.split("").reverse().join("");
	
	return cadenaLetrasReves;

}

function palabrasReves(cadena) {

	let cadenaPalabrasReves = cadena.split(" ").reverse().join(" ");
	
	return cadenaPalabrasReves;

}


function palindromo(cadena) {

	let cadenaMinusculas = cadena.toLocaleLowerCase();
	let cadenaSinEspacios = cadenaMinusculas.replaceAll(" ", "");
	let cadenaInvertida = letrasReves(cadenaSinEspacios);

	return cadenaInvertida == cadenaSinEspacios;

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

