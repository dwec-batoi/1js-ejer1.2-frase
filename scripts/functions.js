'use strict'

function letras(frase) {

	//Muestra el tamaño de la frase incluyendo espacios

	return frase.length;	
}

function palabras(frase) {

	//Muestra la cantidad de palabras tras reemplazar los espacios en la frase

	return frase.trim().replace(/\s+/gi, ' ').split(' ').length;
}

function maysc(frase) {

	//Convierte la frase a letras mayúsculas

	return frase.toUpperCase();
}

function titulo(frase) {

	//Reemplaza las primeras letras en minúscula de cada palabra y las pone en mayúsculas

	return frase.replace(/\b[a-z]/g, lt => lt.toUpperCase());

}

function letrasReves(frase) {

	//Invierte la frase separando los carácteres individualmente

	return frase.split("").reverse().join("");

}

function palabrasReves(frase) {

	//Invierte el orden de la frase separando las palabras individualmente.

	return frase.split(" ").reverse().join(" ");

}

function palindromo(frase) {


	//Pone la frase en minúsculas y le quita los espacios
	
	frase=frase.toLowerCase();

	frase=frase.replace(/ /g, "");


	//Comprueba si la frase es igual de derecha a izquierda y da un resultado false o true

	for (var i = 0; i < frase.length; i++) {

		if (frase[i] != frase[frase.length-i-1]) {

			return false;
		}			
	}

	return true;
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
