"use strict"
function comprobacio(frase){
  //comprobar si contiene numeros
  var numeros="0123456789";
  for(var i=0; i<frase.length; i++){
      if (numeros.indexOf(frase.charAt(i),0)!=-1){
         return false;
      }
   }
   //comprobar si contiene letras
   var letras="abcdefghyjklmnñopqrstuvwxyz";
   frase = frase.toLowerCase();
   for(i=0; i<frase.length; i++){
      if (letras.indexOf(frase.charAt(i),0)!=-1){
         return true;
      }
   }

}

function letras(frase){
	return frase.length;
}


function palabras(frase){
  const primerEspacio = /^ /
  const ultimoEspacio = / $/
  const variosEspacios = /[ ]+/g
  //eliminamos los posibles espacios al principio i final
  frase = frase.replace (variosEspacios," ");
  frase = frase.replace (primerEspacio,"");
  frase = frase.replace (ultimoEspacio,"");
  //Almacenamos y separamos las palabras
  var fraseArray = frase.split (" ");
  var palabras = fraseArray.length;
  return palabras;
}

function maysc(frase){
  return frase.toUpperCase();
}

function titulo(frase){
  return frase.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

function letrasReves(frase){
  var x = frase.length;
  var fraseInvertida = "";
//añadimos a un string vacío carácter por carácter de manera inversa
  while (x>=0) {
    fraseInvertida = fraseInvertida + frase.charAt(x);
    x--;
  }
  return fraseInvertida;
}

function palabrasReves(frase){
  const primerEspacio = /^ /
  const ultimoEspacio = / $/
  const variosEspacios = /[ ]+/g
  //eliminamos los posibles espacios al inicio y al final
  frase = frase.replace (variosEspacios," ");
  frase = frase.replace (primerEspacio,"");
  frase = frase.replace (ultimoEspacio,"");
  var fraseArray = frase.split (" ");
  //Almacenamos y separamos las palabras
  var x = fraseArray.length - 1 ;
  var fraseInvertida = "";
//Añadimos palabra por palabra , junto a sus espacios en un string vacío
  while (x>=0) {
    fraseInvertida = fraseInvertida + " " + fraseArray[x];
    x--;
  }
  return fraseInvertida;
}

function palindromo(frase) {
  // Pasar a minusculas la frase
  var fraseOriginal = frase.toLowerCase();
  //quitar signos de puntuación y espacios
  fraseOriginal = fraseOriginal.replaceAll(" ", "");
  fraseOriginal=fraseOriginal.replace(/\./g, "");
  fraseOriginal=fraseOriginal.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  //invertir la frase
  var fraseInvertida=letrasReves(fraseOriginal);
  //quitar espacios
  fraseOriginal = fraseOriginal.replaceAll(" ", "");
  fraseInvertida = fraseInvertida.replaceAll(" ", "");
//verificar si son iguales
  if(fraseOriginal == fraseInvertida){
    var resultado = true;
  }
  else {
    var resultado = false;
  }
  return resultado;
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
