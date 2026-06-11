const persona_arreglo=['Cristian',22,'correo@correo.com',true,true];
console.log(persona_arreglo);

// El siguiente codigo es para crear el objeto
const persona={
    nombre:'Cristian',
    edad:22,
    correo:'correo@correo.com',
    // suscripcion_web:true,
    // suscripcion_correo:true
// Añadir un objeto dentro de otro objeto
    suscripcion:{
        web:true,
        correo:true,
    },
// Añadir un atributo como funcion a un objeto
    saludo:function(){
        alert("Hola mundo");
    },
};
// dos formas de llamar un atributo, se llama el objeto y luego el "campo"
console.log(persona.nombre);
console.log(persona["edad"]);

// Trabajar con variables 
let auxiliar='correo';
console.log(persona[auxiliar]);

// Añadir un nuevo atributo(caracteristica) al objeto
persona.pais="mexico";
console.log(persona);

// cambiar el atributo de una caracteristica de un objeto
persona.pais="colombia";

console.log(persona.suscripcion.web);
// DE esta forma se llama a la funcion que esta dentro del objeto
persona.saludo();