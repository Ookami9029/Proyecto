// metodos para numeros
// toFixed()    obtiene un numero con la cantidad de decimales especificados
// const numero=3.141516;
// console.log(numero.toFixed());
// console.log(numero.toFixed(10));

// parseInt()   Intenta transformar un valor a un entero 
// const numero1=prompt("Escribe un numero: ");
// const numero2=prompt("Escribe otro numero: ");
// console.log(numero1+numero2);

// const numero1=parseInt(prompt("Escribe un numero: "));
// const numero2=parseInt(prompt("Escribe otro numero: "));
// console.log(numero1+numero2);

// parseFloat()  Intenta convertir el numero con decimales
// const numero1=parseFloat(prompt("Escribe un numero: "));
// const numero2=parseFloat(prompt("Escribe otro numero: "));
// console.log(numero1+numero2);

// // Math.floor()     redondea hacia abajo un numero
// console.log(Math.floor(10.1));
// console.log(Math.floor(10.99));

// // Math.ceil()      redondea hacia arriba un numero
// console.log(Math.ceil(10.1));
// console.log(Math.ceil(10.99));

// // Math.round()     redondea hacia el numero mas cercano
// console.log(Math.round(10.1));
// console.log(Math.round(10.99));

// Math.random()        Selecciona un numero aleatorio entre 0 y 0.99
// const numero=Math.random();
// console.log(numero);

// ejemplo de numero aleatorio de 0 a 100
const numero=Math.random();
console.log(numero);
// redondear hacia abajo el numero
console.log(Math.floor(numero*101));