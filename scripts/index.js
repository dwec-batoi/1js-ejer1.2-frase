'use strict'

let frase;

do {

	frase = prompt("Introduce una frase");

}while(!frase);


console.log("La frase es: " + frase);

console.log(letras(frase) + " letras y " + palabras(frase) + " palabras");

console.log(maysc(frase));

console.log(titulo(frase));

console.log(letrasReves(frase));

console.log(palabrasReves(frase));

if (palindromo(frase) == false) {

	console.log("No es un palindromo");

}else{

	console.log("Si es un palindromo");
}




