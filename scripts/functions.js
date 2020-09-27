'use strict'
let letras = function(input='') {
	return input.replace(/\d+/g, '').length;
}
let palabras = function(input='') {
	return input.split(' ').length;
}

let maysc = function(input='') {
	return input.toUpperCase();
}

let titulo = function(input='') {
	let words = input.split(' ');
	let result = "";
	for(let i=0; i<words.length; i++) {
		let word = words[i];
		word = word.charAt(0).toUpperCase() + word.slice(1);
		result+=word;
		if (i+1 < words.length) {
			result+=' ';
		}
	}
	return result;
}

let letrasReves = function(input='') {
	return input.split("").reverse().join("");
}

let palabrasReves = function(input='') {
	return input.split(' ').reverse().join(' ');
}

let palindromo = function(input='') {
	let first = input.replace(/\s+/g, '').toLowerCase();
	let second = letrasReves(first);
	return first == second;
}
module.exports  =  { 
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}