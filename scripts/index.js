'use strict'
var frase = prompt("Introduzca una frase");
if(comprobacio(frase)){
  console.log("Frase: "+frase);
  console.log(letras(frase)+" letras y "+palabras(frase)+" palabras");
  console.log(maysc(frase));
  console.log(titulo(frase));
  console.log(letrasReves(frase));
  console.log(palabrasReves(frase));
  if(palindromo(frase)){
    console.log("Sí és un palíndromo");
  }
  else {
    console.log("No és un palíndromo");
  }
}
else {
  console.log("ERROR DE FORMATO . INTRODUZCA UN STRING");
}
