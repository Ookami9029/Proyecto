//1. Leer un número entero y mostrar todos los enteros comprendidos entre 1 y el número leído.
function todoslosenteros(){
    let num=Number(document.getElementById("number1").value);
    let resultado=document.getElementById("resultado1");
    resultado.textContent="";
    if (num>1){
        for(let i=2; i<num; i++){
            resultado.textContent+=`>${i} `;
            
        }
    }
    else{
        resultado.textContent="Ingresa un numero positivo mayor a 1";
    }
}

// 2. Leer un número entero y mostrar todos los pares comprendidos entre 1 y el número leído.
function todoslospares(){
    let num=Number(document.getElementById("number2").value);
    let resultado=document.getElementById("resultado2");
    resultado.textContent="";
    if(num>1){
        for(let i=2; i<num; i++){
            if(i%2==0){
                resultado.textContent+=`>${i} `
            }
        }
    }
    else{
        resultado.textContent="Ingrese un numero positivo mayor a 1";
    }
    if(num==2){
        resultado.textContent="El numero ingresado es 2, por lo cual es el único par";
    }
}

// 3. Leer un número entero y mostrar todos los divisores exactos del número comprendidos entre 1 y el número leído
function divisoresexactos(){
    let num=Number(document.getElementById("number3").value);
    let resultado=document.getElementById("resultado3");
    resultado.textContent="";
    let comprobar=false;
    if (num>1){
        for(let i=2; i<num; i++){
            if(num%i==0){
                resultado.textContent+=`>${i} `;
                comprobar=true;
            }
        }
        if(comprobar===false){
            sresultado.textContent=`El numero ${num} es primo con lo cual solo tiene por divisor ${num} y 1`
        }
    }
    else{
        resultado.textContent="Ingrese un numero positivo mayor que 1"
    }
}

// 4. Leer dos números y mostrar todos los enteros comprendidos entre ellos.
function dosnumerosenteros(){
    let num=Number(document.getElementById("number4").value);
    let num2=Number(document.getElementById("number4_2").value);
    let resultado=document.getElementById("resultado4");
    resultado.textContent="";
    if(num>num2){
        for(let i=num2; i<num; i++){
            resultado.textContent+=`>${i} `
        }
    }
    else if(num2>num){
        for(let i=num; i<num2; i++){
            resultado.textContent+=`>${i} `
        }
    }
    if(num==num2){
        resultado.textContent="Ingrese dos números diferentes"
    }
}

// 5. Leer dos números y mostrar todos los números terminados en 4 comprendidos entre ellos.
function terminadosen4() {
    let num=Number(document.getElementById("number5").value);
    let num2=Number(document.getElementById("number5_2").value);
    let resultado=document.getElementById("resultado5");
    resultado.textContent="";
    let nofour=true;
    if(num>num2){
        for(let i=num2; i<num; i++){
            let verif=Math.trunc(i%10);
            if(verif==4){
                resultado.textContent+=`>${i} `;
                nofour=false;
            }
        }
        if(nofour===true){
        resultado.textContent=`No hay números terminados en 4 entre ${num2} y ${num}`;
        }
    }
    else if(num2>num){
        for(let i=num; i<num2; i++){
            let verif=Math.trunc(i%10);
            if(verif==4){
                resultado.textContent+=`>${i} `;
                nofour=false;
            }
        }
        if(nofour===true){
        resultado.textContent=`No hay números terminados en 4 entre ${num} y ${num2}`;
        }
    }
    else{
        resultado.textContent="Ingrese dos números distintos";
    }
}

// 6. Leer un número entero de tres dígitos y mostrar todos los enteros comprendidos entre 1 y cada uno de los dígitos.
function numerosentre3digitos(){
    let num=Number(document.getElementById("number6").value);
    let resultado=document.getElementById("resultado6");
    resultado.textContent="";
    let dig1=Math.trunc(num/100);
    let dig2=Math.trunc((num%100)/10);
    let dig3=Math.trunc(num%10);
    if(dig1>1){
        for(let a=2; a<dig1; a++){
            resultado.textContent+=`>${a}`;
        }
    }
    else{
        resultado.textContent="El primer dígito es 1"
    }
    if(dig2>1){
        for(let b=2; b<dig2; b++){
            resultado.textContent+=`>${b}`;
        }
    }
    else{
        resultado.textContent="El segundo dígito es 1"
    }
    if(dig3>1){
        for(let c=2; c<dig3; c++){
            resultado.textContent+=`>${c}`;
        }
    }
    else{
        resultado.textContent="El tercer dígito es 1"
    }
}

// 7. Mostrar en pantalla todos los enteros comprendidos entre 1 y 100.
function numerosentre1y100(){
    let resultado=document.getElementById("resultado7");
    resultado.textContent="";
    for(let i=2; i<100; i++){
        resultado.textContent+=`>${i} `
    }
}

// 8. Mostrar en pantalla todos los pares comprendidos entre 20 y 200.
function paresentre20y100(){
    let resultado=document.getElementById("resultado8");
    resultado.textContent="";
    for(let i=21; i<200; i++){
        if(i%2==0){
            resultado.textContent+=`>${i} `
        }
    }
}

// 9. Mostrar en pantalla todos los números terminados en 6 comprendidos entre 25 y 205.
function mostrarterminadosen6(){
    let resultado=document.getElementById("resultado9");
    resultado.textContent="";
    for(let i=25; i<205; i++){
        let unidad=Math.trunc(i%10);
        if(unidad==6){
            resultado.textContent+=`>${i} `
        }
    }
}

// 10. Leer un número entero y determinar a cuánto es igual la suma de todos los enteros comprendidos entre 1 y el número leído.
function sumartodosentrenumeros(){
    let num=Number(document.getElementById("number10").value);
    let resultado=document.getElementById("resultado10");
    resultado.textContent="";
    let suma=0;
    if(num>2){
        for(let i=2; i<num; i++){
            suma+=i;
            resultado.textContent=`La suma de todos los enteros entre 1 y ${num} es >${suma}.`
        }
    }
    else{
        resultado.textContent=`El numero ingresado es 2 (negativo o menor a 2) con lo cual no hay números entre 1 y ${num}`
    }
}

// 11. Leer un número entero de 3 dígitos y determinar si tiene el dígito 1.
function determinarnumero1(){
    let num=Number(document.getElementById("number11").value);
    let resultado=document.getElementById("resultado11");
    resultado.textContent="";
    let dig1=Math.trunc(num/100);
    let dig2=Math.trunc((num%100)/10);
    let dig3=Math.trunc(num%10);
    if(num>99 && num<1000){
        if (dig1===1){
            resultado.textContent=`El numero ${num} en su primer dígito (centenas) tiene el numero 1`;
        }
        else if (dig2===1){
            resultado.textContent=`El numero ${num} en su segundo dígito (decenas) tiene el numero 1`;
        }
        else if (dig3===1){
            resultado.textContent=`El numero ${num} en su tercer dígito (unidades) tiene el numero 1`;
        }
        else{
            resultado.textContent=`El numero ${num} no tiene el numero 1 en ninguno de sus dígitos`;
        }
    }
    else{
        resultado.textContent=`Ingrese un numero de tres dígitos`;
    }
}

// 12. Leer un entero y mostrar todos los múltiplos de 5 comprendidos entre 1 y el número leído.
function multiplosde5(){
    let num=Number(document.getElementById("number12").value);
    let resultado=document.getElementById("resultado12");
    resultado.textContent="";
    if(num>4){
        for(let i=2; i<num; i++){
            let verifi=i%5;
            if(verifi===0){
                resultado.textContent+=`>${i} `;
            }
        }
    }
    else{
        resultado.textContent=`El numero ingresado es menor a 5 con lo cual no hay ningún múltiplo de 5 entre el y 1`;
    }
}

// 13. Mostrar en pantalla los primeros 20 múltiplos de 3.
function primerosmultiplosde3(){
    let resultado=document.getElementById("resultado13");
    resultado.textContent="";
    let contador=0;
    let numero=1;
    while(contador<20){
        if(numero%3===0){
            resultado.textContent+=`>${numero} `;
            contador+=1;
        }
        numero+=1;
    }
}

// 14. Escribir en pantalla el resultado de sumar los primeros 20 múltiplos de 3.
function sumamultiplosde3(){
    let resultado=document.getElementById("resultado14");
    resultado.textContent="";
    let contador=0;
    let numero=1;
    let suma=0;
    while(contador<20){
        if(numero%3===0){
            contador+=1;
            suma=suma+numero;
            resultado.textContent=`La suma de los primeros 20 múltiplos de 3 es >${suma}`;
        }
        numero+=1;
    }
}

// 15. Mostrar en pantalla el promedio entero de los n primeros múltiplos de 3 para un número n leído.
function promedioentre2numeros(){
    let cantidad=Number(document.getElementById("number15").value);
    let num=Number(document.getElementById("number15_2").value);
    let resultado=document.getElementById("resultado15");
    let contador=0;
    let suma=0;
    resultado.textContent="";
    for(let a=1; a<=num; a++){
        if(a%3===0){
            suma+=a;
            contador+=1;
            if(contador===cantidad){
                break;
            }
        }
    }
    if(contador===0){
        resultado.textContent=`No se encontraron múltiplos de 3 desde el 1 hasta el ${num}`
    }
    else{
        let promedio=Math.trunc(suma/contador);
        resultado.textContent=`El promedio entero de los ${cantidad} primeros múltiplos de 3 para ${num} es >${promedio}`;
    }
}

// 16. Promediar los x primeros múltiplos de 2 y determinar si ese promedio es mayor 
// que los y primeros múltiplos de 5 para valores de x y y leídos.
function mayordelpromedioXY(){
    let numx=Number(document.getElementById("number16").value);
    let numy=Number(document.getElementById("number16_2").value);
    let resultado=document.getElementById("resultado16");
    resultado.textContent="";
// sacamos el promedio de los X primeros múltiplos de 2
    let contadorA=0;
    let sumaA=0;
    for(let a=1; ;a++){
        if(a%2===0){
            sumaA+=a;
            contadorA+=1;
            if(contadorA===numx){
                break;
            }
        }
    }
    let totalA=Math.trunc(sumaA/numx);
// Ahora se saca el promedio de los primeros Y múltiplos de 5
    let contadorB=0;
    let sumaB=0;
    for(let b=1; ;b++){
        if(b%5===0){
            sumaB+=b;
            contadorB+=1;
            if(contadorB===numy){
                break;
            }
        }
    }
    let totalB=Math.trunc(sumaB/numy);
    if(totalA>totalB){
        resultado.textContent=`El promedio de los primeros ${numx} múltiplos de 2 es >${totalA}< y es mayor que los primeros ${numy} múltiplos de 5`
    }
    else{
        resultado.textContent=`El promedio de los primeros ${numy} múltiplos de 5 es >${totalB}< y es mayor que los primeros ${numx} múltiplos de 2`
    }
}

// 17. Leer dos números enteros y mostrar todos los múltiplos de 5 comprendidos entre 
// el menor y el mayor.
function multiplosde5menormayor(){
    let num=Math.abs(Number(document.getElementById("number17").value));
    let num2=Math.abs(Number(document.getElementById("number17_2").value));
    let resultado=document.getElementById("resultado17");
    resultado.textContent="";
    let notmultiplos=true;
    if(num>=0 && num2>=0){
        if(num===num2){
            resultado.textContent=`Ingrese un numero positivo diferente en ambos campos`
        }
        else if(num>num2){
            for(let a=num2; a<num; a++){
                let verifi=a%5;
                notmultiplos=false;
                if(verifi===0){
                    resultado.textContent+=`>${a} `;
                }
            }
            if(notmultiplos){
                resultado.textContent=`No hay múltiplos de 5 entre ${num2} y ${num}`;
            }
        }
        else if(num2>num){
            for(let b=num; b<num2; b++){
                let verifi=b%5;
                notmultiplos=false;
                if(verifi===0){
                    resultado.textContent+=`>${b} `;
                }
            }
            if(notmultiplos){
                resultado.textContent=`No hay múltiplos de 5 entre ${num} y ${num2}`;
            }
        }
    }
}

// 18. Leer un número entero y determinar si es primo.
function analizarnumeroprimo(){
    let num=Number(document.getElementById("number18").value);
    let resultado=document.getElementById("resultado18");
    resultado.textContent="";
    let esprimo=true;
    for(let i=2; i<num; i++){
        if(num%i===0){
            esprimo=false;
            break;
        }
    }
    if (esprimo){
        resultado.textContent=`El numero ${num} es primo`;
    }
    else{
        resultado.textContent=`El numero ${num} no es primo`;
    }
}

// 19. Leer un número entero y determinar cuántos dígitos tiene.
function cantidaddigitos(){
    let num=Math.abs(Number(document.getElementById("number19").value));
    let resultado=document.getElementById("resultado19");
    resultado.textContent="";
    let contador=0;
    if(num===0){
        contador=1;
    }
    else{
        while(num>0){
            num=Math.trunc(num/10); 
            contador++;
        }
    }
    resultado.textContent=`El número tiene ${contador} dígitos.`;
}

// 20. Leer un número entero y determinar a cuánto es igual la suma de sus dígitos.
function sumadigitos(){
    let num=Math.abs(Number(document.getElementById("number20").value));
    let resultado=document.getElementById("resultado20");
    resultado.textContent="";
    let residuo=0;
    let suma=0;
    if(num===0){
        resultado.textContent=`Ingrese un numero mayor a 0`;
        return;
    }
    while(num>0){
        residuo=num%10;
        suma+=residuo;
        num=Math.trunc(num/10);
    }
    resultado.textContent=`El resultado de la suma de los dígitos es >${suma}`;
}

// 21. Leer un número entero y determinar cuántas veces tiene el dígito 1.
function cuantos1existen(){
    let num=Math.abs(Number(document.getElementById("number21").value));
    let backup=num;
    let resultado=document.getElementById("resultado21");
    resultado.textContent="";
    let contador=0;
    let temp=0;
    if(num===0){
        resultado.textContent=`Ingrese un numero mayor a 0`;
        return;
    }
    while(num>0){
        temp=num%10;
        if(temp===1){
            contador+=1;
        }
        num=Math.trunc(num/10);
    }
    if(contador===0){
        resultado.textContent=`No hay ningún 1 en los dígitos en el numero ${backup}`;
    }
    else{
        resultado.textContent=`Hay ${contador} uno(s) en el numero ${backup}`;
    }
}

// 22. Leer un número entero y determinar si la suma de sus dígitos es también un número primo.
function digitosdanprimo(){
    let num=Math.abs(Number(document.getElementById("number22").value));
    let resultado=document.getElementById("resultado22");
    resultado.textContent="";
    let suma=0;
    let esprimo=true;
    if(num>=10 && num<=99){
        let dig1=Math.trunc(num/10);
        let dig2=num%10;
        suma=dig1+dig2;
    }
    else if(num>=100 && num<=999){
        let dig1=Math.trunc(num/100);
        let dig2=Math.trunc((num%100)/10);
        let dig3=num%10;
        suma=dig1+dig2+dig3;
    }
    else if(num>=1000 && num<=9999){
        let dig1=Math.trunc(num/1000)
        let dig2=Math.trunc((num%1000)/100);
        let dig3=Math.trunc((num%100)/10);
        let dig4=num%10;
        suma=dig1+dig2+dig3+dig4;
    }
    if(suma<2){
        esprimo=false;
    }
    else{
        for(let a=2; a<suma; a++){
            if(suma%a===0){
                esprimo=false;
                break;
            }
        }
    }
    if(esprimo){
        resultado.textContent=`La suma de los dígitos del numero >${num} es >${suma} y es un numero primo`;
    }
    else{
        resultado.textContent=`La suma de los dígitos del numero >${num} es >${suma} y no es un numero primo`;
    }
}

// 23. Leer un número entero y determinar a cuánto es igual la suma de sus dígitos pares.
function sumadedigitospares(){
    let num=Math.abs(Number(document.getElementById("number23").value));
    let backup=num;
    let resultado=document.getElementById("resultado23");
    resultado.textContent="";
    let suma=0;
    let temp=0;
    if(num===0){
        resultado.textContent=`Ingrese un numero mayor a 0`;
        return;
    }
    while(num>0){
        temp=num%10;
        if(temp%2===0){
            suma+=temp
        }
        num=Math.trunc(num/10);
    }
    if(suma===0){
        resultado.textContent=`No hay ningún dígito par en el numero ${backup}`;
    }
    else{
        resultado.textContent=`El resultado de la suma de los dígitos pares de >${backup} es >${suma}`;
    }
}

// 24. Leer un número entero y determinar a cuánto es igual el promedio entero de sus dígitos.
function promediosumadigitos(){
    let num=Math.abs(Number(document.getElementById("number24").value));
    let backup=num;
    let resultado=document.getElementById("resultado24");
    resultado.textContent="";
    let suma=0;
    let temp=0;
    let contador=0;
    let promedio=0;
    if(num===0){
        resultado.textContent=`Ingrese un numero mayor a 0`;
        return;
    }
    while(num>0){
        temp=num%10;
        suma+=temp;
        contador+=1;
        num=Math.trunc(num/10);
    }
    promedio=Math.trunc(suma/contador);
    resultado.textContent=`El promedio entero de los dígitos del numero >${backup} es >${promedio}`;
}

// 25. Leer un número entero y determinar cuál es el mayor de sus dígitos
function mayordelosdigitos(){
    let num=Math.abs(Number(document.getElementById("number25").value));
    let backup=num;
    let resultado=document.getElementById("resultado25");
    resultado.textContent="";
    let temp=0;
    let maximo=0;
    if(num===0){
        resultado.textContent=`Ingrese un numero mayor a 0`;
        return;
    }
    while(num>0){
        temp=num%10;
        if(temp>maximo){
            maximo=temp;
        }
        num=Math.trunc(num/10);
    }
    resultado.textContent=`El mayor dígito del numero >${backup} es el >${maximo}`;
}

// 26. Leer 2 números enteros y determinar cuál de los dos tiene mayor cantidad de dígitos
function mayorcantidaddigitos(){
    let num=Math.abs(Number(document.getElementById("number26").value));
    let backup=num;
    let num2=Math.abs(Number(document.getElementById("number26_2").value));
    let backup2=num2;
    let resultado=document.getElementById("resultado26");
    resultado.textContent="";
    let contador=0;
    let contador2=0;
    if(num===0 && num2===0){
        resultado.textContent=`Al menos uno de los dos números debe ser mayor a cero`;
        return;
    }
    while(num>0){
        num=Math.trunc(num/10);
        contador+=1;
    }
    while(num2>0){
        num2=Math.trunc(num2/10);
        contador2+=1;
    }
    if(contador>contador2){
        resultado.textContent=`El numero con mayor cantidad de dígitos entre >${backup} y >${backup2} es >${backup} con ${contador} dígitos`;
    }
    else{
        resultado.textContent=`El numero con mayor cantidad de dígitos entre >${backup} y >${backup2} es >${backup2} con ${contador2} dígitos`;
    }
}

// 27. Leer 2 números enteros y determinar cual de los dos tiene mayor cantidad de dígitos primos.
function mayorcantidaddigitosprimos(){
    let num=Math.abs(Number(document.getElementById("number27").value));
    let backup=num;
    let num2=Math.abs(Number(document.getElementById("number27_2").value));
    let backup2=num2;
    let resultado=document.getElementById("resultado27");
    resultado.textContent="";
    let contador=0;
    let temp=0;
    let contador2=0;
    let temp2=0;
    if(num===0 && num2===0){
        resultado.textContent=`Al menos uno de los dos números debe ser mayor a cero`;
        return;
    }
    while(num>0){
        temp=num%10;
        if(temp>1){
            let esprimo=true;
            for(let a=2; a<temp; a++){
                if(temp%a===0){
                    esprimo=false;
                    break;
                }
            }
            if(esprimo){
                contador+=1;
            }
        }
        num=Math.trunc(num/10);
    }
    while(num2>0){
        temp2=num2%10;
        if(temp2>1){
            let esprimo=true;
            for(let b=2; b<temp2; b++){
                if(temp2%b===0){
                    esprimo=false;
                    break;
                }
            }
            if(esprimo){
                contador2+=1;
            }
        }
        num2=Math.trunc(num2/10);
    }
    if(contador===0 && contador2===0){
        resultado.textContent=`Ninguno de los dos números >${backup} y >${backup2} tienen dígitos primos`;
    }
    else if(contador==contador2){
        resultado.textContent=`Ambos números >${backup} y >${backup2} tienen la misma cantidad de dígitos primos >${contador}`;
    }
    else if(contador>contador2){
        resultado.textContent=`El numero con mayor cantidad de dígitos primos entre >${backup} y >${backup2} es >${backup} con ${contador} dígito(s) primo(s)`;
    }
    else{
        resultado.textContent=`El numero con mayor cantidad de dígitos primos entre >${backup} y >${backup2} es >${backup2} con ${contador2} dígito(s) primo(s)`;
    }
}

// 28. Leer un número entero y determinar a cuánto es igual el primero de sus dígitos.
function valorprimerdigito(){
    let num=Math.abs(Number(document.getElementById("number28").value));
    let backup=num;
    let resultado=document.getElementById("resultado28");
    resultado.textContent="";
    let dig1=0;
    if(num===0){
        resultado.textContent=`Al menos uno de los dos números debe ser mayor a cero`;
        return;
    }
    while(num>0){
        if(num>=1 && num<=9){
            dig1=num;
            break;
        }
        num=Math.trunc(num/10);
    }
    resultado.textContent=`El valor del primer dígito de >${backup} es >${dig1}`;
}

// 29. Leer un número entero y mostrar todos sus componentes numéricos o sea aquellos para quienes el sea un múltiplo.
// en este ejercicio toca leer un numero y descomponerlo ejemplo -- 256 y averiguar si el 2 el 5 y el 6 son múltiplo de 256
function componentesnumericosmultiplos(){
    let num=Math.abs(Number(document.getElementById("number29").value));
    let backup=num;
    let resultado=document.getElementById("resultado29");
    resultado.textContent="";
    let contador=0;
    let digitos=0;
    let temp=0;
    if(num===0){
        resultado.textContent=`Al menos uno de los dos números debe ser mayor a cero`;
        return;
    }
    while(num>0){
        temp=num%10;
        digitos+=1;
        if(backup%temp===0){
            contador+=1;
        }
        num=Math.trunc(num/10);
    }
    if(contador===0){
        resultado.textContent=`Ninguno de los dígitos del numero >${backup} son múltiplos de >${backup}`;
    }
    else{
        resultado.textContent=`De los ${digitos} dígitos de ${backup}, ${contador} de sus dígitos son múltiplos de el`;
    }
}

// 30. Leer números hasta que digiten 0 y determinar a cuánto es igual el promedio de los número terminados en 5.
function promedionumerosterminanen5(){
    let num=Math.abs(Number(document.getElementById("number30").value));
    let backup=num;
    let resultado=document.getElementById("resultado30");
    resultado.textContent="";
    let contador=0;
    let temp=0;
    let suma=0;
    for(let a=1; a<=num; a++){
        if(a>=10){
            temp=a%10;
        }
        if(temp===5){
            suma+=a;
            contador+=1;
        }
    }
    let promedio=suma/contador;
    if(promedio===0){
        resultado.textContent=`En los números que se leyeron no se encontraron números terminados en 5`;
    }
    else{
        resultado.textContent=`El promedio de los números terminados en 5 desde 1 hasta ${backup} es >${promedio}`;
    }
}

// 31. Leer números hasta que digiten 0 y determinar a cuanto es igual el promedio entero de los número primos leídos.
function promedionumerosprimos(){
    let num=Math.abs(Number(document.getElementById("number31").value));
    let backup=num;
    let resultado=document.getElementById("resultado31");
    resultado.textContent="";
    let contador=0;
    let temp=0;
    let suma=0;
    let promedio=0;
    while(num>0){
        let esprimo=true;
        temp=num;
        if(temp<=1){
            esprimo=false;
        }
        else{
            for(let a=2; a<temp; a++){
                if(temp%a===0){
                    esprimo=false;
                    break;
                }
            }
        }
        if(esprimo){
            suma+=temp;
            contador+=1
        }
        num=num-1;
    }
    if(contador>0){
        promedio=Math.trunc(suma/contador);
        resultado.textContent=`El promedio de los números primos desde 1 hasta ${backup} es >${promedio}`;
    }
    else{
        resultado.textContent=`En los números que se leyeron no se encontraron números primos`;
    }
}

// 32. Si 32768 es el tope superior para los números enteros cortos, determinar cuál es el número primo mas cercano por debajo de él.
function verificarnumeroprimo32768(){
    let resultado=document.getElementById("resultado32");
    resultado.textContent="";
    let limite=32768;
    let backup=limite;
    let temp=limite;
    while(limite>0){
        let esprimo=true;
        temp=limite;
        for(let a=2; a<=Math.sqrt(temp); a++){
            if(temp%a===0){
                esprimo=false;
                break;
            }
        }
        if(esprimo){
            break;
        }
        limite=limite-1;
    }
    resultado.textContent=`El numero primo mas cercano a ${backup} es el >${temp}`
}

// 33. Generar los números del 1 al 10 utilizando un ciclo que vaya de 10 a 1.
function generarnumeros1al10(){
    let resultado=document.getElementById("resultado33");
    resultado.textContent="";
    let num=10;
    while(num>0){
        resultado.textContent+=`>${num}`
        num=num-1;
    }
}

// 34. Leer dos números enteros y determinar a cuánto es igual el producto mutuo del primer dígito de cada uno.
function productomutuo(){
    let num=Math.abs(Number(document.getElementById("number34").value));
    let num2=Math.abs(Number(document.getElementById("number34_2").value));
    let backup=num;
    let backup2=num2;
    let resultado=document.getElementById("resultado34");
    resultado.textContent="";
    let dig1=0;
    let dig2=0;
    let producto1=0;
    let producto2=0;
// primero se descompone el numero hasta obtener el primer dígito
    while(num>0){
        if(num>=1 && num<=9){
            dig1=num;
        }
        num=Math.trunc(num/10);
    }
    while(num2>0){
        if(num2>=1 && num2<=9){
            dig2=num2;
        }
        num2=Math.trunc(num2/10);
    }
// se hace el producto mutuo (según es multiplicar el dígito por el mismo) y se muestra el resultado
    producto1=dig1*dig1;
    producto2=dig2*dig2;
    resultado.textContent=`El producto mutuo del primer dígito de ${backup} y ${backup2} es >${producto1} y >${producto2}`;
}

// 35. Mostrar en pantalla la tabla de multiplicar del número 5.
function tablamultiplicarnumero5(){
    let resultado=document.getElementById("resultado35");
    resultado.textContent="";
    for(let a=1; a<11; a++){
        resultado.innerHTML+=`5 x ${a} = ${5*a}<br>`;
    }
}

// 36. Leer un número y calcularle su factorial.
function calcularfactorial(){
    let num=Math.abs(Number(document.getElementById("number36").value));
    let backup=num;
    let resultado=document.getElementById("resultado36");
    resultado.textContent="";
    let factorial=num;
    for(let a=1; a<num; a++){
        factorial=factorial*a;
    }
    resultado.textContent=`El factorial de ${backup} es >${factorial}`;
}

// 37. Leer un número y calcularle el factorial a todos los enteros comprendidos entre 1 y el número leído.
function factorialtodoslosnumeros(){
    let num=Math.abs(Number(document.getElementById("number37").value));
    let backup=num;
    let resultado=document.getElementById("resultado37");
    resultado.textContent="";
    while(num>0){
        let factorial=num;
        for(let a=1; a<num; a++){
            factorial=factorial*a;
        }
        resultado.innerHTML+=`El factorial de ${num} es >${factorial}<br>`;
        num=num-1;
    }
}

// 38. Leer un número entero y calcular el promedio entero de los factoriales de los enteros comprendidos entre 1 y el número leído.
function promediofactorial(){
    let num=Math.abs(Number(document.getElementById("number38").value));
    let backup=num;
    let resultado=document.getElementById("resultado38");
    resultado.textContent="";
    let promedio=0;
    let suma=0;
    let contador=0;
    while(num>0){
        let factorial=num;
        for(let a=1; a<num; a++){
            factorial=factorial*a;
        }
        suma+=factorial;
        contador+=1;
        num=num-1;
    }
    promedio=Math.trunc(suma/contador);
    resultado.textContent=`El promedio entero de todos los factoriales entre 1 y ${backup} es >${promedio}`;
}

// 39. Leer un número entero y calcular a cuánto es igual la sumatoria de todos los factoriales
// de los números comprendidos entre 1 y el número leído.
function sumatoriafactoriales(){
    let num=Math.abs(Number(document.getElementById("number39").value));
    let backup=num;
    let resultado=document.getElementById("resultado39");
    resultado.textContent="";
    let suma=0;
    while(num>0){
        let factorial=num;
        for(let a=1; a<num; a++){
            factorial=factorial*a;
        }
        suma+=factorial;
        num=num-1;
    }
    resultado.textContent=`El sumatoria de todos los factoriales entre 1 y ${backup} es >${suma}`;
}

// 40. Utilizando ciclos anidados generar las siguientes ternas de números 
//     1 1 1 
//     2 1 2 
//     3 1 3 
//     4 2 1 
//     5 2 2 
//     6 2 3 
//     7 3 1 
//     8 3 2 
//     9 3 3
function ternasdenumeros(){
    let resultado=document.getElementById("resultado40");
    resultado.textContent="";
    let c1=1;
    for(let c2=1; c2<=3; c2++){
        for(c3=1; c3<=3; c3++){
            resultado.innerHTML+=`${c1} ${c2} ${c3}<br>`;
            c1++;
        }
    }
}