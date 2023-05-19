/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloPadre = [];
   var arregloHijo = [];
   var array = Object.keys(objeto);
   
   for (var i = 0; i < array.length ; i++ ){
      arregloHijo.push(array[i]);
      arregloHijo.push(objeto[array[i]]);
      arregloPadre.push(arregloHijo);
      arregloHijo = [];
   }
   return arregloPadre;
}
   
function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   
   var array = string.split('');
   var contador = 1;
   var propiedad = ' ';
   var objetoADevolver = {};

   array.sort();

   for (var i = 1; i <= array.length; i++){
       propiedad = array[i];
      if(array[i - 1] === propiedad){
         contador = contador + 1;
      } else {
         elemento = array[i-1];
         objetoADevolver[elemento] = contador;
         contador = 1;
      }
   }

   return objetoADevolver;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   function esMayuscula(letra){
      if (letra.toUpperCase() === letra) {
         return true;
      } else {
         return false;
      }
   }
   
   array = string.split('');
   stringMayusculas = '';
   stringMinusculas = ''; 
   
   array.forEach( (elemento) => {
      if(esMayuscula(elemento)){
         stringMayusculas = stringMayusculas + elemento;
      }  else {
         stringMinusculas = stringMinusculas + elemento;
      }
      }
   );

   return stringMayusculas + stringMinusculas;

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   
   array = frase.split('');
   var stringSalida= '';
   var palabraAlReves= '';

  for (i=0; i <= array.length -1 ; i++){
   
      if (array[i] != ' '){
         palabraAlReves = array[i] + palabraAlReves;
         } 
      else 
         {
            stringSalida = stringSalida + palabraAlReves + ' ';
            palabraAlReves = '';
         }

      if (i == array.length - 1){
         stringSalida = stringSalida + palabraAlReves;
      }
   }

   return stringSalida;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroEnString = numero.toString();
   var array = numeroEnString.split('');
   var arrayInvertido = array.reverse();
   
   if (arrayInvertido.join('') == numero){
      return 'Es capicua';
   }else{
      return 'No es capicua';
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var array = string.split('');
   var stringADevolver = '';
   array.forEach((letra) => {
      if (letra != 'a' && letra != "b" && letra != 'c'){
         stringADevolver = stringADevolver + letra;
      }
   })
   return stringADevolver;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var arrayOrdenado = arrayOfStrings.sort((a,b) => {return a.length - b.length});
   console.log(arrayOrdenado);
   return arrayOrdenado;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var interseccion = array1.filter(valor => array2.includes(valor));
   return interseccion;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
