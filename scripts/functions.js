'use strict'

let letras= frase => frase.length;





let palabras= frase=>{

	let array=frase.split(' ');

	return array.length;

}

let maysc= frase=>frase.toLocaleUpperCase();




let titulo= frase=>{

frase=frase.split(' ');

let nuevaFrase="";

for()



return nuevaFrase;
	
}

let letrasReves= frase=>{

	let nuevaCadena="";

	for (var i =frase.length-1; i>=0 ; i--) {
		nuevaCadena+=frase[i];
	}

	return nuevaCadena

}




let palabrasReves= frase=>{

let nuevaCadena="";

let array=frase.split(' ');

	for (let i =array.length-1; i>=0 ; i--) {
		nuevaCadena+=array[i]+" ";
	}

	return nuevaCadena
	

}

let palindromo= frase=>{

	let fraseArray=frase.split("");

	let fraseSinEspacios="";

	let comprobador=true;

	for(let i in fraseArray){
		if(fraseArray[i]!=" "){
			fraseSinEspacios+=fraseArray[i];
		}
	}

	fraseSinEspacios=fraseSinEspacios.split("");

	let fraseReves=fraseSinEspacios.reverse();
	

	for(let k in fraseSinEspacios){
		if (fraseSinEspacios[k]==fraseReves[k]) {

		}else{
			comprobador=false;
		}
	}


	if (comprobador==true) {

		return "Es palindromo";
	}else{

		return "No es palindromo";
	}
}



module.exports ={

	letra,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo


}


