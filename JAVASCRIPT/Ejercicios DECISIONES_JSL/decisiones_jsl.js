//PRIMER EJERCICIO -- Leer un número entero de dos dígitos y determinar si ambos dígitos son pares.
function analizarnumeropar(){
    let dato1=Number(document.getElementById('number1').value);
    if(dato1>=10 && dato1<100){
        //obtenemos el primer digito, usamos math.trunc() para redondear el resultado
        let paresdig1=Math.trunc(dato1/10);
        //obtenemos el segundo digito
        let paresdig2=dato1%10;
        //verificamos que sean pares y se muestra el resultado
        if(paresdig1%2===0 && paresdig2%2===0){
            alert("Ambos dígitos del numero son pares");
        }
        else{
            alert("Uno de los dígitos (o los dos) del numero es impar");
        }
    }
    else{
        alert("El numero no es de dos digitos")
    }
}

//SEGUNDO EJERCICIO -- Leer un número entero de dos dígitos menor que 20 y determinar si es primo.
function verificarnumeroprimo(){
    let dato1=Number(document.getElementById('number2').value);
    if (dato1>=10 && dato1<20){
        //asumimos que es primo desde el inicio
        let esprimo=true;
        //usamos un ciclo para hacer todas las divisiones respectivas
        //se le esta diciendo el valor a la variable, se le dice que tiene que ser menor que el numero dado por el usuario
        //y al final se le dice que en cada vuelta aumente la variable "nump" en 1
        for(let nump=2; nump<dato1; nump++){
            if(dato1%nump===0){
                esprimo=false;
                break;
            }
        }
        //si la variable "esprimo" es "true" muestra el mensaje, de lo contrario sale el else
        if (esprimo){
        alert("EL numero es primo");
        }
        else{
        alert("El numero no es primo");
        }
    }
    else{
        alert("Ingrese un numero de dos dígitos que este entre 10 y 20")
    }
}

//TERCER TRABAJO -- Leer un número entero de dos dígitos y determinar si es primo y además si es negativo. 
function numeroprimonegativo(){
    let dato1=Number(document.getElementById('number3').value);
    if (dato1<=-10 && dato1>-100){
        //asumimos que el numero es negativo y primo
        let primonegativo=true;
        //convertimos el numero a uno positivo SOLO PARA PODER REALIZAR LAS RESPECTIVAS DIVISIONES
        let primnegtlimite=Math.abs(dato1);
        //se le indica al bucle que empieze en 2,que no sea mayor que el numero dado y que aumente en 1 en cada vuelta
        for(let negprm=2; negprm<primnegtlimite; negprm++){
            if(primnegtlimite%negprm==0){
                primonegativo=false;
                break;
            }
        }
        //muestra el mensaje en caso de que la variable "primonegativo" sea "true"
        if(primonegativo){
            alert("EL numero es primo y negativo");
        }
        else{
            alert("El numero no es primo");
        }
    }
    else{
        alert("El numero no es de dos dígitos negativos");
    }
    
}

//CUARTO TRABAJO -- Leer un número entero de dos dígitos y determinar si sus dos dígitos son primos. 
function analizarnumerosprimos(){
    let dato1=Number(document.getElementById('number4').value);
    if(dato1>=10 && dato1<100){
        //asumimos que ambos numeros son primos
        let ambosprimos=true;
        //se obtiene el primer digito redondeando a numero entero con Math.trunc()
        let primodig1=Math.trunc(dato1/10);
        //se obtiene el segundo digito del numero
        let primodig2=dato1%10;
        //se verifica que el primer digito no sea 1 o 0 ya que no son primos
        if(primodig1<2)  {ambosprimos=false;}
        //se hace el bucle para realizar las divisiones del numero dado por el usuario
        for(let primnum=2; primnum<primodig1; primnum++){
            if(primodig1%primnum==0){
                ambosprimos=false;
                break;
            }
        }
        //se verifica que el segundo digito no sea 1 o 0 ya que no son primos
        if(primodig2<2)  {ambosprimos=false;}
        //se hace el bucle para realizar las divisiones del numero dado por el usuario
        for(let primnum2=2; primnum2<primodig2; primnum2++){
            if(primodig2%primnum2==0){
                ambosprimos=false;
                break;
            }
        }
        //se muestra el mensaje en caso de "ambosprimos" estar en estado "true"
        if (ambosprimos){
            alert("Ambos dígitos son primos")
        }
        else{
            alert("Uno de los dígitos no es primo")
        }
    }
    else{
        alert("El numero ingresado no es de dos dígitos positivos")
    }
}

//QUINTO EJERCICIO -- Leer un número entero de dos dígitos y determinar si un dígito es múltiplo del otro.
function analizarmultiplos(){
    let dato1=Number(document.getElementById('number5').value);
    if(dato1>=10 && dato1<100){
        let multiplodig1=Math.trunc(dato1/10);
        let multiplodig2=dato1%10;
        if (multiplodig1==0 || multiplodig2==0){
            alert("Un digito es multiplo del otro (por contener un cero)");
        }
        else if(multiplodig1%multiplodig2==0 || multiplodig2%multiplodig1==0){
            alert("Al menos un dígito es múltiplo del otro");
        }
        else{   
            alert("Los dígitos no son múltiplos el uno del otro");
        }
    }
    else{
        alert("El numero ingresado no es de dos dígitos positivos");
    }
}

//SEXTO EJERCICIO -- Leer un número entero de dos dígitos y determinar si los dos dígitos son iguales.
function analizarnumerosiguales(){
    let dato1=Number(document.getElementById('number6').value);
    if(dato1>=10 && dato1<100){
        let igualesdig1=Math.trunc(dato1/10);
        let igualesdig2=dato1%10;
        if(igualesdig1==igualesdig2){
            alert("Los números son iguales")
        }
        else{
            alert("Los números no son iguales")
        }
    }
    else{
        alert("El numero ingresado no es de dos dígitos positivos")
    }
}

//SÉPTIMO EJERCICIO -- Leer dos números enteros y determinar cuál es el mayor. 
function verificarnumeromayor(){
    let dato1=Number(document.getElementById('number7').value);
    let dato2=Number(document.getElementById('secondnumber7').value);
    if(dato1!=0 && dato2!=0){
        if(dato1==dato2){
            alert("Los números son iguales")
        }
        else{
            alert("Los números no son iguales")
        }
    }
    else{
        alert("Uno de los números es cero")
    }
}

//OCTAVO EJERCICIO -- Leer dos números enteros de dos dígitos y determinar si tienen dígitos comunes.
function digitosComunes() {
    let n1 = Math.abs(Number(document.getElementById('number8_1').value));
    let n2 = Math.abs(Number(document.getElementById('number8_2').value));
    if ((n1 >= 10 && n1 < 100) && (n2 >= 10 && n2 < 100)) {
        let n1_d1 = Math.trunc(n1 / 10), n1_d2 = n1 % 10;
        let n2_d1 = Math.trunc(n2 / 10), n2_d2 = n2 % 10;
        // Comparamos los 4 posibles cruces entre dígitos
        if (n1_d1 === n2_d1 || n1_d1 === n2_d2 || n1_d2 === n2_d1 || n1_d2 === n2_d2) {
            alert("Tienen dígitos comunes");
        } else { alert("No tienen dígitos comunes"); }
    } else { alert("Ambos números deben ser de dos dígitos"); }
}

//NOVENO EJERCICIO -- Leer dos números enteros de dos dígitos y determinar si la suma origina un número par.
function sumaNumerosEsPar() {
    let n1 = Number(document.getElementById('number9_1').value);
    let n2 = Number(document.getElementById('number9_2').value);
    // Verificamos el residuo de la suma total
    if ((n1 + n2) % 2 === 0) { alert("La suma genera un numero par"); }
    else { alert("La suma genera un numero impar"); }
}

//DÉCIMO EJERCICIO -- Leer dos números enteros de dos dígitos y determinar a cuánto es igual la suma de todos los dígitos.
function sumarCuatroDigitosTotales() {
    let n1 = Math.abs(Number(document.getElementById('number10_1').value));
    let n2 = Math.abs(Number(document.getElementById('number10_2').value));
    if ((n1 >= 10 && n1 < 100) && (n2 >= 10 && n2 < 100)) {
        let suma = Math.trunc(n1 / 10) + (n1 % 10) + Math.trunc(n2 / 10) + (n2 % 10);
        alert("La suma de los 4 dígitos es: " + suma);
    } else {
        alert("Ambos números deben ser de dos dígitos");
    }
}

//11° EJERCICIO -- Leer un número entero de tres dígitos y determinar a cuánto es igual la suma de sus dígitos.
function sumaTresDigitos() {
    let n = Math.abs(Number(document.getElementById('number11').value));
    if (n >= 100 && n < 1000) {
        let suma = Math.trunc(n / 100) + Math.trunc((n % 100) / 10) + (n % 10);
        alert("La suma de los dígitos es: " + suma);
    } else {
        alert("El número debe tener tres dígitos");
    }
}

//12° EJERCICIO -- Leer un número de tres dígitos y determinar si al menos dos son iguales.
function alMenosDosIguales() {
    let n = Math.abs(Number(document.getElementById('number12').value));
    let d1 = Math.trunc(n / 100), d2 = Math.trunc((n % 100) / 10), d3 = n % 10;
    if (d1 === d2 || d1 === d3 || d2 === d3) { alert("Al menos dos números son iguales"); }
    else { alert("Todos son diferentes"); }
}

//13° EJERCICIO -- Leer un número de tres dígitos y determinar en qué posición está el mayor dígito.
function posicionMayorDigito() {
    let n = Math.abs(Number(document.getElementById('number13').value));
    let d1 = Math.trunc(n / 100), d2 = Math.trunc((n % 100) / 10), d3 = n % 10;
    let mayor = Math.max(d1, d2, d3);
    if (mayor === d1) alert("El mayor está en la posición 1 (Centenas)");
    else if (mayor === d2) alert("El mayor está en la posición 2 (Decenas)");
    else alert("El mayor está en la posición 3 (Unidades)");
}

//14° EJERCICIO -- Leer un número de tres dígitos y determinar si algún dígito es múltiplo de los otros.
function digitoMultiploDeOtros() {
    let n = Math.abs(Number(document.getElementById('number14').value));
    let d1=Math.trunc(n/100), d2=Math.trunc((n%100)/10), d3=n%10;
    // Evitamos división por cero y probamos combinaciones
    if ((d1 !== 0 && d2 % d1 === 0) || (d1 !== 0 && d3 % d1 === 0) || 
        (d2 !== 0 && d1 % d2 === 0) || (d2 !== 0 && d3 % d2 === 0) || 
        (d3 !== 0 && d1 % d3 === 0) || (d3 !== 0 && d2 % d3 === 0)) 
        alert("Al menos alguno de los dígitos es múltiplo de otro");
    else alert("No se detectaron múltiplos directos (o alguno de los dígitos es cero (0)");
}

//15° EJERCICIO -- Leer tres números enteros y determinar el mayor usando solo dos variables.
function mayorTresVariablesLimitadas() {
    let mayor = Number(document.getElementById('number15_1').value);
    let temp = Number(document.getElementById('number15_2').value);
    if (temp > mayor) mayor = temp;
    temp = Number(document.getElementById('number15_3').value);
    if (temp > mayor) mayor = temp;
    alert("El mayor es: " + mayor);
}

// //16° EJERCICIO -- Leer tres números enteros y mostrarlos de forma ascendente.
function ordenarAscendente() {
    let n1 = Math.abs(Number(document.getElementById('number16_1').value));
    let n2 = Math.abs(Number(document.getElementById('number16_2').value));
    let n3 = Math.abs(Number(document.getElementById('number16_3').value));
//CASO DONDE n1 SEA EL MAYOR
    if (n1>=n2 && n1>=n3){
        //CASO DONDE n2 SEA MAYOR A n3
        if (n2>=n3){
            alert(`El orden de los números de forma ascendente es ${n3}, ${n2}, ${n1}`)
        }
        //CASO DONDE n3 SEA MAYOR A n2
        else{
            alert(`El orden de los números de forma ascendente es ${n2}, ${n3}, ${n1}`)
        }
    }
//CASO DONDE n2 SEA EL MAYOR
    else if (n2>=n1 && n2>=n3){
        //CASO DONDE n1 SEA MAYOR A n3
        if (n1>=n3){
            alert(`El orden de los números de forma ascendente es ${n3}, ${n1}, ${n2}`)
        }
        //CASO DONDE n3 SEA MAYOR A n1
        else{
            alert(`El orden de los números de forma ascendente es ${n1}, ${n3}, ${n2}`)
        }
    }
//CASO DONDE n3 SEA EL MAYOR
    else if (n3>=n1 && n3>=n2){
        //CASO DONDE n2 SEA MAYOR A n1
        if (n2>=n1){
            alert(`El orden de los números de forma ascendente es ${n1}, ${n2}, ${n3}`)
        }
        //CASO DONDE n1 SEA MAYOR A n2
        else{
            alert(`El orden de los números de forma ascendente es ${n2}, ${n1}, ${n3}`)
        }
    }
}

//17° EJERCICIO -- Leer tres números enteros de dos dígitos y determinar en cuál está el mayor dígito.
function dondeEstaElMayorDigito() {
    let n1 = Math.abs(Number(document.getElementById('number17_1').value));
    let n2 = Math.abs(Number(document.getElementById('number17_2').value));
    let n3 = Math.abs(Number(document.getElementById('number17_3').value));
    //Descomponemos los números y solamente dejamos guardado el mayor de cada uno
    let m1 = Math.max(Math.trunc(n1 / 10), n1 % 10);
    let m2 = Math.max(Math.trunc(n2 / 10), n2 % 10);
    let m3 = Math.max(Math.trunc(n3 / 10), n3 % 10);
    //Validamos la posición en la que esta el mayor numero
    if (m1 >= m2 && m1 >= m3) alert("El mayor dígito está en el primer número");
    else if (m2 >= m1 && m2 >= m3) alert("El mayor dígito está en el segundo número");
    else alert("El mayor dígito está en el tercer número");
}

//18° EJERCICIO -- Leer un número de tres dígitos y determinar si el primero es igual al último.
function primeroIgualUltimo() {
    let n = Math.abs(Number(document.getElementById('number18').value));
    if (Math.trunc(n / 100) === (n % 10)) alert("El primer y último dígito son iguales");
    else alert("El primer y ultimo dígito son diferentes");
}

//19° EJERCICIO -- Leer un número entero de tres dígitos y determinar cuántos dígitos primos tiene.
function contarPrimosTresDigitos() {
    let n = Math.abs(Number(document.getElementById('number19').value));
    if (n >= 100 && n < 1000) {
        //Descomponemos
        let d1 = Math.trunc(n / 100);
        let d2 = Math.trunc((n % 100) / 10);
        let d3 = n % 10;
        //Asignamos un contador y ponemos los dígitos en una lista para ahorrar espacio
        let contadorPrimos = 0;
        let digitos = [d1, d2, d3];
        //En este caso los primos son 2, 3, 5 o 7, hacemos un bucle para validar esto con los
        //dígitos que guardamos en la lista
        for (let i = 0; i < 3; i++) {
            if (digitos[i] === 2 || digitos[i] === 3 || digitos[i] === 5 || digitos[i] === 7) {
                contadorPrimos++;
            }
        }
        alert("El número tiene " + contadorPrimos + " dígito(s) primo(s)");
    } else {
        alert("El numero no es de 3 dígitos");
    }
}

//20° EJERCICIO -- Leer un número entero de tres dígitos y determinar cuántos dígitos pares tiene.
function contarParesTresDigitos() {
    let n = Math.abs(Number(document.getElementById('number20').value));
    let d1 = Math.trunc(n / 100), d2 = Math.trunc((n % 100) / 10), d3 = n % 10;
    let pares = 0;
    if (d1 % 2 === 0) pares++;
    if (d2 % 2 === 0) pares++;
    if (d3 % 2 === 0) pares++;
    alert("Tiene " + pares + " dígitos pares");
}

//21° EJERCICIO -- Leer un número de tres dígitos y determinar si uno es la suma de los otros dos.
function digitoEsSumaDeOtros() {
    let n = Math.abs(Number(document.getElementById('number21').value));
    let d1 = Math.trunc(n / 100), d2 = Math.trunc((n % 100) / 10), d3 = n % 10;
    if (d1 === d2 + d3 || d2 === d1 + d3 || d3 === d1 + d2) {
        alert("Un dígito es la suma de los otros dos");
    } else {
        alert("Ninguno es la suma de los otros");
    }
}

//22° EJERCICIO -- Leer un número de cuatro dígitos y determinar la suma de sus dígitos.
function sumarDigitosCuatro() {
    let n = Math.abs(Number(document.getElementById('number22').value));
    let suma = Math.trunc(n/1000) + Math.trunc((n%1000)/100) + Math.trunc((n%100)/10) + (n%10);
    alert("Suma total: " + suma);
}

//23° EJERCICIO -- Leer un número entero de cuatro dígitos y determinar cuántos dígitos pares tiene.
function contarParesCuatroDigitos() {
    let n = Math.abs(Number(document.getElementById('number23').value));
    let d1 = Math.trunc(n / 1000), d2 = Math.trunc((n % 1000) / 100);
    let d3 = Math.trunc((n % 100) / 10), d4 = n % 10;
    let pares = 0;
    let digitos = [d1, d2, d3, d4];
    for(let i=0; i<4; i++) { if(digitos[i] % 2 === 0) pares++; }
    alert("Tiene " + pares + " dígitos pares");
}

//24° EJERCICIO -- Leer un número menor que 50 y positivo y determinar si es primo.
function esPrimoMenorCincuenta() {
    let n = Number(document.getElementById('number24').value);
    if (n > 0 && n < 50) {
        let esP = true;
        for(let i=2; i<n; i++) { if(n % i === 0) { esP = false; break; } }
        if (esP && n > 1) alert("Es primo");
        else alert("No es primo");
    } else { alert("Debe ser positivo y menor a 50"); }
}

//25° EJERCICIO -- Leer un número de cinco dígitos y determinar si es un número capicúo.
function esCapicuoCincoDigitos() {
    let n = Math.abs(Number(document.getElementById('number25').value));
    if (n >= 10000 && n <= 99999) {
        let d1 = Math.trunc(n / 10000), d2 = Math.trunc((n % 10000) / 1000);
        let d4 = Math.trunc((n % 100) / 10), d5 = n % 10;
        if (d1 === d5 && d2 === d4) alert("Es Capicúo");
        else alert("No es Capicúo");
    } else alert("Debe ser de 5 dígitos");
}

//26° EJERCICIO -- Leer número de 4 dígitos y determinar si el segundo es igual al penúltimo.
function segundoIgualPenultimo() {
    let n = Math.abs(Number(document.getElementById('number26').value));
    let d2 = Math.trunc((n % 1000) / 100);
    let d3 = Math.trunc((n % 100) / 10); // El penúltimo es el tercer dígito
    if (d2 === d3) alert("El segundo dígito es igual al penúltimo");
    else alert("Son diferentes");
}

//27° EJERCICIO -- Determinar si el número es igual a 10.
function esIgualADiez() {
    let n = Number(document.getElementById('number27').value);
    if (n === 10) alert("Es igual a 10");
    else alert("No es igual a 10");
}

//28° EJERCICIO -- Determinar si es múltiplo de 7.
function esMultiploDeSiete() {
    let n = Number(document.getElementById('number28').value);
    if (n % 7 === 0) alert("Es múltiplo de 7");
    else alert("No es múltiplo de 7");
}

//29° EJERCICIO -- Determinar si termina en 7.
function terminaEnSiete() {
    let n = Math.abs(Number(document.getElementById('number29').value));
    if (n % 10 === 7) alert("Termina en 7");
    else alert("No termina en 7");
}

//30° EJERCICIO -- Leer un número menor que mil y determinar cuántos dígitos tiene.
function cantidadDeDigitos() {
    let n = Math.abs(Number(document.getElementById('number30').value));
    if (n < 10) alert("Tiene 1 dígito");
    else if (n < 100) alert("Tiene 2 dígitos");
    else if (n < 1000) alert("Tiene 3 dígitos");
    else alert("El número es igual o mayor a 1000");
}

//31° EJERCICIO -- Leer número de dos dígitos y guardar cada uno en variables.
function mostrarDigitosSeparados() {
    let n = Math.abs(Number(document.getElementById('number31').value));
    let v1 = Math.trunc(n / 10);
    let v2 = n % 10;
    alert("Variable 1: " + v1 + " | Variable 2: " + v2);
}

//32° EJERCICIO -- Leer un número entero de 4 dígitos y determinar si tiene mas dígitos pares o impares.
function masParesQueImpares() {
    let n = Math.abs(Number(document.getElementById('number32').value));
    if (n >= 1000 && n <= 9999) {
        // Se descompone el numero
        let d1 = Math.trunc(n / 1000);
        let d2 = Math.trunc((n % 1000) / 100);
        let d3 = Math.trunc((n % 100) / 10);
        let d4 = n % 10;
        // se define un "contador" de pares e impares ademas se meten los datos en un array (lista)
        let pares = 0;
        let impares = 0;
        let digitos = [d1, d2, d3, d4];
        // hacemos un bucle para definir si aumentar el contador de pares o impares
        for (let i = 0; i < 4; i++) {
            if (digitos[i] % 2 === 0) {
                pares++;
            } else {
                impares++;
            }
        }
        // se muestra el mensaje dependiendo de si hay mas pares o impares
        if (pares > impares) {
            alert("Tiene más dígitos PARES (" + pares + " pares vs " + impares + " impares)");
        } else if (impares > pares) {
            alert("Tiene más dígitos IMPARES (" + impares + " impares vs " + pares + " pares)");
        } else {
            alert("Hay empate: 2 pares y 2 impares");
        }
    } else {
        alert("Debe ser un número de cuatro dígitos");
    }
}

//33° EJERCICIO -- Leer dos números enteros y determinar cuál es múltiplo de cuál.
function determinarCualEsMultiplo() {
    let n1 = Number(document.getElementById('number33_1').value);
    let n2 = Number(document.getElementById('number33_2').value);
    if (n1 % n2 === 0) alert(n1 + " es múltiplo de " + n2);
    else if (n2 % n1 === 0) alert(n2 + " es múltiplo de " + n1);
    else alert("Ninguno es múltiplo del otro");
}

//34° EJERCICIO -- Leer tres números enteros y determinar si el último dígito es igual.
function ultimosDigitosIguales() {
    let u1 = Math.abs(Number(document.getElementById('number34_1').value)) % 10;
    let u2 = Math.abs(Number(document.getElementById('number34_2').value)) % 10;
    let u3 = Math.abs(Number(document.getElementById('number34_3').value)) % 10;
    if (u1 === u2 && u2 === u3) alert("Los tres terminan en " + u1);
    else alert("No terminan igual");
}