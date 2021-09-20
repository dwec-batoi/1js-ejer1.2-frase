'use strict'

function letras (string){ // return int
    return string.length;
}

function palabras (string){ // return int
    let arrayPalabras = string.split(" ");
    return arrayPalabras.length;
}

function maysc (string){ // return string
    return string.toLocaleUpperCase();
}

function titulo (string){ // return string
    let palabras = string.split(" ");
    let letraMayuscula = "";
    for (let i = 0; i < palabras.length; i++) {
        letraMayuscula = palabras[i].charAt(0).toLocaleUpperCase();
        palabras[i] = palabras[i].replace(palabras[i].charAt(0),letraMayuscula);
    }
    return arrayToString(palabras," ");
}

function letrasReves(string){ // return string
    let stringAlReves = "";
    for (let i = string.length -1; i >= 0; i--) {
        stringAlReves += string[i];
    }
    return stringAlReves;
}

function palabrasReves(string){ // return string
    let array = string.split(" ");
    let arrayAlReves = [];
    for (let i = array.length -1; i >= 0; i--) {
        arrayAlReves += array[i];
        if (i > 0){
            arrayAlReves += " ";
        }
    }
    return arrayAlReves.toString();
}

function palindromo(string){ // return boolean
    let stringSinEspaciosEnMinuscula = removeCharacter(string," ").toLowerCase();
    let stringFinalmenteProcesado = removeCharacter(stringSinEspaciosEnMinuscula,","); 
    let palabraInvertida = "";
    for (let i = stringFinalmenteProcesado.length -1; i >= 0; i--) {
        palabraInvertida += stringFinalmenteProcesado.charAt(i);
    }
    return palabraInvertida == stringFinalmenteProcesado;
}

// funciones secundarias
function arrayToString(array, separador){ // return string
    let string = "";
    for (let key in array) {
        string += array[key];
        if (parseInt(key) < array.length -1){
            string += separador;
        }
    }
    return string;
}

function removeCharacter(string, character){ // return string
    let array = string.split(character);
    let nuevaCadena = "";
    for (let key in array) {
        nuevaCadena += array[key];
    }
    return nuevaCadena;
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