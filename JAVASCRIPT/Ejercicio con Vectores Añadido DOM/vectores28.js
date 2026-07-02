// Leer 10 números enteros, almacenarlos en un vector y determinar en qué posición está el
// número cuya suma de dígitos sea la mayor.
let contador=1;
const inputsumadigitos=document.getElementById("ingreso_sumadigitos");
const vectorsumadigitos=[];
inputsumadigitos.addEventListener("keydown", function (event){
    if(event.key==="Enter"){
        let numerointroducido=parseInt(inputsumadigitos.value);
        if(!isNaN(numerointroducido)){
            vectorsumadigitos.push(numerointroducido);
            inputsumadigitos.value="";
            contador++;
            if(contador<=10){
                inputsumadigitos.placeholder=`Ingresa el ${contador} numero`;
            }
            else{
                inputsumadigitos.placeholder=`Numeros ingresados correctamente`;
                inputsumadigitos.disabled=true;
                sumadigitosmayor(vectorsumadigitos);
            }
        }
        else{
            alert("Ingresar numero valido");
        }
    }
});
function sumadigitosmayor(vectorsumadigitos){
    let resultado=document.getElementById("resultadosumadigitos");
    resultado.textContent="";
    let temp1=0;
    let digito=0;
    let mayor=0;
    let backup=0;
    for(a=0; a<vectorsumadigitos.length; a++){
        temp1=vectorsumadigitos[a];
        let suma=0;
        while(temp1>0){
            digito=temp1%10
            suma+=digito
            temp1=Math.trunc(temp1/10);
        }
        if(suma>mayor){
            mayor=suma;
            backup=vectorsumadigitos[a];
        }
    }
    resultado.textContent=`El numero con la mayor suma de sus dígitos es ${backup} con el resultado >${mayor}`;
}

// 2-Leer 10 números enteros, almacenarlos en un vector y mostrar en pantalla todos los enteros
// comprendidos entre 1 y cada uno de los números almacenados en el vector.
const inputenterosentre=document.getElementById("ingreso_enterosentre");
const vectorenterosentre=[];
inputenterosentre.addEventListener("keydown", function (event){
    if(event.key==="Enter"){
        let numerointroducido=parseInt(inputenterosentre.value);
        if(!isNaN(numerointroducido)){
            vectorenterosentre.push(numerointroducido);
            inputenterosentre.value="";
            contador++;
            if(contador<=10){
                inputenterosentre.placeholder=`Ingresa el ${contador} numero`;
            }
            else{
                inputenterosentre.placeholder=`Números ingresados correctamente`;
                inputenterosentre.disabled=true;
                enterosentre(vectorenterosentre);
            }
        }
        else{
            alert("Ingresar numero valido");
        }
    }
});
function enterosentre(vectorenterosentre){
    let resultado=document.getElementById("resultadoenterosentre");
    resultado.textContent="";
    resultado.style.whiteSpace="pre-line";
    for(a=0; a<vectorenterosentre.length; a++){
        let numero=vectorenterosentre[a];
        let incre=1 
        for(b=1; b<=numero; b++){
            resultado.textContent+=`${b}`;
        }
        resultado.textContent+="\n";
    }
}

// 3-Leer 10 números enteros, almacenarlos en un vector y determinar cuántos de los números
// almacenados en dicho vector pertenecen a los 100 primeros elementos de la serie de
// Fibonacci.
const inputfibonacci=document.getElementById("ingreso_fibonacci");
const vectorfibonacci=[];
inputfibonacci.addEventListener("keydown", function (event){
    if(event.key==="Enter"){
        let numerointroducido=parseInt(inputfibonacci.value);
        if(!isNaN(numerointroducido)){
            vectorfibonacci.push(numerointroducido);
            inputfibonacci.value="";
            contador++;
            if(contador<=10){
                inputfibonacci.placeholder=`Ingresa el ${contador} numero`;
            }
            else{
                inputfibonacci.placeholder=`Números ingresados correctamente`;
                inputfibonacci.disabled=true;
                seriefibonacci(vectorfibonacci);
            }
        }
        else{
            alert("Ingresar numero valido");
        }
    }
});
function seriefibonacci(vectorfibonacci){
    let resultado=document.getElementById("resultadofibonacci");
    resultado.textContent="";
    let verificados=[];
    for(a=0; a<vectorfibonacci.length; a++){
        let numero=vectorfibonacci[a];
        if(numero>4346655768){
            alert(`El numero ${numero} supera el limite máximo para el calculo, no se tendrá en cuenta`)
            continue;
        }
        let suma=((numero**2)*5)+4;
        let resta=((numero**2)*5)-4;
        let raiz1=Math.sqrt(suma);
        let raiz2=Math.sqrt(resta);
        if(!Number.isInteger(raiz1) && !Number.isInteger(raiz2)){
            continue;
        }
        verificados.push(numero);
    }
    resultado.textContent=`De los 10 números ingresados los que pertenecen a la serie de Fibonacci son: `;
    for(b=0; b<verificados.length; b++){
        if(b===verificados.length-1){
            resultado.textContent+=`${verificados[b]}`;
        } else{
            resultado.textContent+=`${verificados[b]}, `;
        }
    }
}

// 4-Leer 10 números enteros, almacenarlos en un vector y determinar cuántos números de los
// almacenados en dicho vector comienzan por 34.
const input34=document.getElementById("ingreso_34");
const vector34=[];
input34.addEventListener("keydown", function (event){
    if(event.key==="Enter"){
        let numerointroducido=parseInt(input34.value);
        if(!isNaN(numerointroducido)){
            vector34.push(numerointroducido);
            input34.value="";
            contador++;
            if(contador<=10){
                input34.placeholder=`Ingresa el ${contador} numero`;
            }
            else{
                input34.placeholder=`Números ingresados correctamente`;
                input34.disabled=true;
                comienza34(vector34);
            }
        }
        else{
            alert("Ingresar numero valido");
        }
    }
});
function comienza34(vector34){
    let resultado=document.getElementById("resultado34");
    resultado.textContent="";
    let verificados=[];
    for(a=0; a<vector34.length; a++){
        let numero=vector34[a];
        let backup=numero;
        while(numero>99){
            numero=Math.trunc(numero/10);
            if(numero===34){
                verificados.push(backup);
            }
        }
    }
    resultado.textContent=`De los números ingresados los que comienzan por '34' son: `;
    for(b=0; b<verificados.length; b++){
        resultado.textContent+=`${verificados[b]}, `;
    }
}

// 5- Leer 10 números enteros, almacenarlos en un vector y determinar si la semisuma entre el valor mayor y el valor menor es un número primo.
const inputsemisuma=document.getElementById("ingreso_semisuma");
const vectorsemisuma=[];
inputsemisuma.addEventListener("keydown", function (event){
    if(event.key==="Enter"){
        let numerointroducido=parseInt(inputsemisuma.value);
        if(!isNaN(numerointroducido)){
            vectorsemisuma.push(numerointroducido);
            inputsemisuma.value="";
            contador++;
            if(contador<=10){
                inputsemisuma.placeholder=`Ingresa el ${contador} numero`;
            }
            else{
                inputsemisuma.placeholder=`Números ingresados correctamente`;
                inputsemisuma.disabled=true;
                semisuma(vectorsemisuma);
            }
        }
        else{
            alert("Ingresar numero valido");
        }
    }
});
function semisuma(vectorsemisuma){
    let resultado=document.getElementById("resultadosemisuma");
    resultado.textContent="";
// PRIMER CICLO para encontrar al mayor
    let mayor=0;
    for(a=0; a<vectorsemisuma.length; a++){
        let numero=vectorsemisuma[a];
        if(numero>mayor){
            mayor=numero;
        }
    }
// SEGUNDO CICLO para encontrar el menor
    let menor=vectorsemisuma[0];
    for(b=0; b<vectorsemisuma.length; b++){
        let numero2=vectorsemisuma[b];
        if(numero2<menor){
            menor=numero2;
        }
    }
    let sumatotal=menor+mayor;
// CASO IMPOSIBLE SOLO PRACTICA condición de seguridad en caso de que sumatotal diera menos de 2, ya que menor a 2 no hay primos
    if(sumatotal<2){
        inputsemisuma.value="";
        vectorsemisuma.length=0;
        contador=1;
        return;
    }
    let primo=true;
    for(c=2; c<sumatotal; c++){
        if(sumatotal%c===0){
            primo=false;
            break;
        }
    }
    if(primo){
        resultado.textContent=`La suma de ${menor} y ${mayor} de los números almacenados es ${sumatotal} y SI ES un numero primo`;
    } else{
        resultado.textContent=`La suma de ${menor} y ${mayor} de los números almacenados es ${sumatotal} y NO es un numero primo`;
    }
}

// 6- Leer 10 números enteros, almacenarlos en un vector y determinar si la semisuma entre el valor
// mayor y el valor menor es un número par.
const inputsumapar=document.getElementById("ingreso_sumapar");
const vectorsumapar=[];
inputsumapar.addEventListener("keydown", function (event){
    if(event.key==="Enter"){
        let numerointroducido=parseInt(inputsumapar.value);
        if(!isNaN(numerointroducido)){
            vectorsumapar.push(numerointroducido);
            inputsumapar.value="";
            contador++;
            if(contador<=10){
                inputsumapar.placeholder=`Ingresa el ${contador} numero`;
            }
            else{
                inputsumapar.placeholder=`Números ingresados correctamente`;
                inputsumapar.disabled=true;
                sumapar(vectorsumapar);
            }
        }
        else{
            alert("Ingresar numero valido");
        }
    }
});
function sumapar(vectorsumapar){
    let resultado=document.getElementById("resultadosumapar");
    resultado.textContent="";
// PRIMER CICLO para encontrar al mayor
    let mayor=0;
    for(a=0; a<vectorsumapar.length; a++){
        let numero=vectorsumapar[a];
        if(numero>mayor){
            mayor=numero;
        }
    }
// SEGUNDO CICLO para encontrar el menor
    let menor=vectorsumapar[0];
    for(b=0; b<vectorsumapar.length; b++){
        let numero2=vectorsumapar[b];
        if(numero2<menor){
            menor=numero2;
        }
    }
// CASO IMPOSIBLE SOLO PRACTICA condición de seguridad en caso de que sumatotal diera menos de 2, ya que menor a 2 no hay pares
    let sumatotal=menor+mayor;
    if(sumatotal<2){
        inputsumapar.value="";
        vectorsumapar.length=0;
        contador=1;
        return;
    }
    let par=false;
    for(c=2; c<sumatotal; c++){
        if(sumatotal%c===0){
            par=true;
            break;
        }
    }
    if(par){
        resultado.textContent=`La suma de ${menor} y ${mayor} de los números almacenados es ${sumatotal} y SI ES un numero par`;
    } else{
        resultado.textContent=`La suma de ${menor} y ${mayor} de los números almacenados es ${sumatotal} y NO es un numero par`;
    }
}

// 7- Leer 10 números enteros, almacenarlos en un vector y determinar cuántos números de los
// almacenados en dicho vector terminan en 15.
const input15=document.getElementById("ingreso_15");
const vector15=[];
input15.addEventListener("keydown", function (event){
    if(event.key==="Enter"){
        let numerointroducido=parseInt(input15.value);
        if(!isNaN(numerointroducido)){
            vector15.push(numerointroducido);
            input15.value="";
            contador++;
            if(contador<=10){
                input15.placeholder=`Ingresa el ${contador} numero`;
            }
            else{
                input15.placeholder=`Números ingresados correctamente`;
                input15.disabled=true;
                termina15(vector15);
            }
        }
        else{
            alert("Ingresar numero valido");
        }
    }
});
function termina15(vector15){
    let resultado=document.getElementById("resultado15");
    resultado.textContent="";
    let verificados=[];
    let terminanen15=false;
    for(a=0; a<vector15.length; a++){
        let numero=vector15[a];
        if(numero<15){continue;}
        let ultimosdos=numero%100;
        if(ultimosdos===15){

            verificados.push(numero);
            terminanen15=true;
        }
    }
    if(terminanen15){
        resultado.textContent=`De los numeros almacenados, los que terminan en 15 son: `;
        for(b=0; b<verificados.length; b++){
            resultado.textContent+=`${verificados[b]}, `;
        }
    } else{
        resultado.textContent=`De los numeros almacenados ninguno termina en 15`;
    }
    
}