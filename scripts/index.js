'use strict'

//const { letras, palabras, maysc, titulo, letrasReves, palabrasReves, palindromo } = require("./functions");

let fraseUsuario = prompt("Introduce una frase");


try {
    if(fraseUsuario != null) {
        practica1_2(fraseUsuario);
    }
    
} catch(err) {
    console.error(err)
}





function practica1_2 (fraseUsuario) {
0
    if(fraseUsuario.length <= 0) {
        throw "Has introducir al menos 1 caracter";
        return;
    }
  
    console.log("Frase: \"" + fraseUsuario + "\"");
    
    console.log(letras(fraseUsuario) + " letras y " + palabras(fraseUsuario) + " palabras");

    console.log(maysc(fraseUsuario));

    console.log(titulo(fraseUsuario));

    console.log(letrasReves(fraseUsuario));

    console.log(palabrasReves(fraseUsuario));

    let infoPalindromo = (palindromo(fraseUsuario))?"S\u00ED es un pal\u00EDndromo":"No es un pal\u00EDndromo";
    console.log((palindromo(fraseUsuario))?"S\u00ED es un pal\u00EDndromo":"No es un pal\u00EDndromo");


}