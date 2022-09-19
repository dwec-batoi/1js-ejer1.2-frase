'use strict'

/**
 * Cuenta las letras de una frase dada (contando espacios)
 * @param {*} cadena 
 * @returns number: número de caracteres de una cadena dada
 */
function letras(cadena) {

	return cadena.length;

}

/**
 * Cuenta las palabras de una cadena dada
 * @param {*} cadena 
 * @returns number: número de palabras 
 */
function palabras(cadena) {
	
	let palabras = cadena.split(" ");

	return palabras.length;

}

/**
 * Devuelve una cadena con todos sus caracteres en mayúsculas
 * @param {*} cadena 
 * @returns String
 */
function maysc(cadena) {
	
	return cadena.toLocaleUpperCase();

}

/**
 * Devuelve cadena con todas sus palabras capitalizadas
 * @param {*} cadena 
 * @returns String
 */
function titulo(cadena) {

	let arrayPalabras = cadena.split(" ");
	let arrayPalabrasCapilatizadas = arrayPalabras.map(palabra => palabra[0].toLocaleUpperCase() + palabra.slice(1)); 

	return arrayPalabrasCapilatizadas.join(" ");

}

/**
 * Devuelve cadena invertida
 * @param {*} cadena 
 * @returns String 
 */
function letrasReves(cadena) {
	
	let cadenaLetrasReves = cadena.split("").reverse().join("");
	
	return cadenaLetrasReves;

}

/**
 * Invierte las palabras de una cadena dada
 * @param {*} cadena 
 * @returns String
 */
function palabrasReves(cadena) {

	let cadenaPalabrasReves = cadena.split(" ").reverse().join(" ");
	
	return cadenaPalabrasReves;

}

/**
 * Nos dice si una cadena es un palíndromo
 * @param {*} cadena 
 * @returns Boolean: true, es palíndromo. false, no es palíndromo
 */
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

