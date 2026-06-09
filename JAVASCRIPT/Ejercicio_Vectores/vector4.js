// Leer 10 números enteros, almacenarlos en un vector y determinar cuántas veces en el vector
// se encuentra el dígito 2. No se olvide que el dígito 2 puede estar varias veces en un mismo
// número
let contador_global=1;
const inputcuantos2=document.getElementById("ingreso_cuantos2");
const vectorcuantos2=[];
const resultadocuantos2=document.getElementById("resultado_cuantos2");
inputcuantos2.addEventListener("keydown", function(event){
    if(event.key==="Enter"){
        let numerointroducido=parseInt(inputcuantos2.value);
        if(!isNaN(numerointroducido)){
            vectorcuantos2.push(numerointroducido);
            inputcuantos2.value="";
            contador_global++;
            if (contador_global<=10){
                inputcuantos2.placeholder=`Ingresa el ${contador_global} numero`;
            } else {
                inputcuantos2.placeholder=`Números ingresados correctamente`;
                inputcuantos2.disabled=true;
                cuantos2(vectorcuantos2);
            }
        } else {
            alert("Ingresa un numero valido");
        }
    }
});
function cuantos2(vectorcuantos2){
    let vectortotal=[];
    let numero=0;
    let digito=0;
    let backup=0;
    let contador=0;
    for(a=0; a<vectorcuantos2.length; a++){
        numero=vectorcuantos2[a];
        backup=numero;
        while(numero>0){
            digito=numero%10;
            if(numero===2){
                contador+=1;
                vectortotal.push(backup);
            }
            numero=Math.trunc(numero/10);
        }
    }
    resultadocuantos2.textContent=``;
    resultadocuantos2.style.whiteSpace="pre-line";
    if(contador>=1){
    resultadocuantos2.textContent=`Los números que contienen un 2 son [ ${vectortotal.join(', ')} ]\n Y     el numero 2 aparece en ${contador} ocasion(es)`;
    } else {
        resultadocuantos2.textContent=`En los números ingresados [ ${vectorcuantos2.join(', ')} ]\nEn NINGUNO esta el numero 2`
    }
}

// Leer 10 números enteros, almacenarlos en un vector y determinar cuántos números de los
// almacenados en dicho vector comienzan con 3.
contador_global=1;
const inputcomienza3=document.getElementById("ingreso_comienza3");
const vectorcomienza3=[];
const resultadocomienza3=document.getElementById("resultado_comienza3");
inputcomienza3.addEventListener("keydown", function(event){
    if(event.key==="Enter"){
        let numerointroducido=parseInt(inputcomienza3.value);
        if(!isNaN(numerointroducido)){
            vectorcomienza3.push(numerointroducido);
            inputcomienza3.value="";
            contador_global++;
            if (contador_global<=10){
                inputcomienza3.placeholder=`Ingresa el ${contador_global} numero`;
            } else {
                inputcomienza3.placeholder=`Números ingresados correctamente`;
                inputcomienza3.disabled=true;
                comienza3(vectorcomienza3);
            }
        } else {
            alert("Ingresa un numero valido");
        }
    }
});
function comienza3(vectorcomienza3){
    let vectortotal=[];
    let numero=0;
    let digito=0;
    let backup=0;
    let existen=false;
    for(a=0; a<vectorcomienza3.length; a++){
        numero=vectorcomienza3[a];
        backup=numero;
        while(numero>=10){
            digito=Math.trunc(numero/10);
        }
        if(digito===3){
            vectortotal.push(backup);
            existen=true;
        }
    }
    resultadocomienza3.textContent=``;
    resultadocomienza3.style.whiteSpace="pre-line";
    if(existen){
        resultadocomienza3.textContent=`De los números ingresados los que comienzan por 3 son:\n[${vectortotal.join(', ')}]`;
    } else {
        resultadocomienza3.textContent=`De los números ingresados ninguno empieza por el numero 3`;
    }
}