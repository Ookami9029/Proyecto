// Es para propiedades con cadenas de txt
// length = devuelve el numero de caracteres de una cadena de txt
// let txt="Hola, soy tu";
// console.log(txt.length);

// indexOf()    lastIndexOf()      Delvuelve el index(posicion) del primero/ultimo
//                                 caracter especifico
// let txt="Hola, soy tu";
// console.log(txt.indexOf('o'));
// console.log(txt.lastIndexOf('o'));

// slice()  Devuelve un fragmento de un cadena de txt
// El slice no toma los index definidos
// comienza en el indicado y termina antes del indicado
// y cuenta las posiciones como un array
// let txt="Hola, soy tu";
// console.log(txt.slice(6,9));

// replace()    Devuelve una cadena de txt donde reemplaza un valor por otro
// let txt="Hola, soy ramirez";
// console.log(txt.replace('ramirez','gomez'));

// split()      Convierte una cadena de txt en un array(arreglo)
// Lo que se ponga en las comillas simples '' es lo que va a buscar para separarlo
// let txt="Hola, soy tu";
// console.log(txt.split(' '));

// toUpperCase()    convierte el txt a mayuscula
// toLowerCase()    convierte el txt a minuscula   
// let txt="Hola, soy tu";
// console.log(txt.toUpperCase());
// console.log(txt.toLowerCase());

// trim()    Devuelve una cadena de txt que elimina los espacios
//            en blanco al inicio y al final
let txt=" Hola, soy tu       ";
console.log(txt.trim());
// trimStart()  elimina los espacios al inicio
console.log(txt.trimStart());
// trimEnd()    elimina los espacios al final
console.log(txt.trimEnd());