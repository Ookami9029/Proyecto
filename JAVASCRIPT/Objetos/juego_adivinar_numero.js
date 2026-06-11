const resultado=document.getElementById("resultado_adivinanza");
resultado.textContent="";
resultado.style.whiteSpace="pre-line";
const final=document.getElementById("ganar_perder");
final.textContent="";
final.style.whiteSpace="pre-line";
const numerointroducido=document.getElementById("ingreso_numero");
let contador_global=1;
const dato_random=Math.random();
let adivinar=Math.floor(dato_random*101);
console.log(adivinar);

function adivinanza(){
    let numero=parseInt(numerointroducido.value);
    while(adivinar>10){
        if(contador_global===2){
            break;
        }
        adivinar=Math.trunc(adivinar/10);
    }
    console.log(adivinar);
    if(contador_global===3 && numero!=adivinar){
        resultado.textContent="";
        final.textContent=`Fallaste! No has encontrado el numero oculto\n
        El numero oculto era ${adivinar}`;
        numerointroducido.disabled=true;
    }
    else if(numero===adivinar){
        resultado.textContent="";
        final.textContent=`Felicidades!! Has adivinado el numero ${adivinar}\n
        El numero oculto era ${adivinar}.`;
        numerointroducido.disabled=true;
    } else {
        contador_global++;
        resultado.textContent=`Fallido, Ese no era el numero ( ${numero} ), Ingresa otro numero`;
        numerointroducido.value="";
        numerointroducido.placeholder=`Ingresa otro numero. Intento #${contador_global}`;
    }
};