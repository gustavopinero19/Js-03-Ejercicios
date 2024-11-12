// Bucles, arrays, funciones + Ejercicios

// Arrays - Arreglos - Colección de datos relacionados entre si 
// estructura de datos para poder definir multiples valores


// var colorRojo = 'Rojo';
// var colorRosado = 'Rosado';
// var colorVerde = 'Verde';
// var colorAzul = 'Azul'; 

var usuario1 = 'Pepe';
var usuario2 = 'Maria';
var usuario3 = 'Sofia';

var usuarios = ['Pepe', 'Maria', 'Sofia'];  // string





var numeros = [1, 3, 2, 4, 6, 7, 8, 5]; // Longitud 8 
// indice      0  1  2  3  4  5  6  7 

// console.log(numeros.length);  // Definir la longitud 


// // Ordenar el array 
// console.log(numeros.sort()) // Método que ordena el arreglo 




var colores = ['Rojo', 'Rosado', 'Verde', 'Azul'];  // string 
//               0        1         2        3  indice numerico, su posicion numerica 


// // Push agrega uno o más elementos al final de un array 
// colores.push('Violeta'); 
// console.log(colores) // ['Rojo', 'Rosado', 'Verde', 'Azul', 'Violeta']



// // Pop() eliminar el ultimo elemento 
// colores.pop();
// console.log(colores) //  ['Rojo', 'Rosado', 'Verde', 'Azul'] => 4



// // unshift() Agregar elementos al inicio 
// colores.unshift('Gris'); 
// console.log(colores) // ['Gris', 'Rojo', 'Rosado', 'Verde', 'Azul']


// // shift() Elimina el primer elemento 

// colores.shift();
// console.log(colores) // ['Rojo', 'Rosado', 'Verde', 'Azul']



// Concatenar arreglos 

// var frutas = ['Manzana', 'Banana', 'Pera']; 

// var verduras = ['Zanahoria', 'Papa']; 

// var arraysConcatenados = frutas.concat(verduras)
// // console.log(arraysConcatenados)


// // Includes() Verificar si un elemento existe en el arreglo 

// // console.log(frutas.includes('Pera')); //false 


// // Reverse() revertir el orden de los elementos

// var letras = ['a', 'b', 'c']; 
// letras.reverse()
// // console.log(letras) // ['c', 'b', 'a']


// // Join() Convierte todos los elementos de un arreglo a una cadena de texto 

// var palabras = ['Hola', 'Pepe']; // => longitud 2
// //                0        1 

// var frase = palabras.join(", "); 
// console.log(frase)



// Concatenar elementos especificos del arreglo 
var array1 = ['manzana', 'banana', 'cereza'];
//              0            1        2
var array2 = ['rojo', 'amarillo', 'violeta'];
//              0          1          2

var copiaDeArray = array2; 

console.log(copiaDeArray)


// tomar un elemento especifico de cada array 
// var valor1 = array1[0]; // manzana
// var valor2 = array2[0]; // rojo 

// // Concatenación 

// var concatenar = `${valor1}, ${valor2}`; 

// console.log(concatenar)



// ¿Para que el for? Para recorrer arreglos 

var frutas = ['Manzana', 'Banana', 'Pera']; 
//                0          1        2
// Manza 
// Banana 
// Pera 


for (var i = 0; i < frutas.length; i++) {
//   var i = 2
    console.log(frutas[i]) // imprimo el array 
    // manzana 
    // Banana 
    // Pera 
}
