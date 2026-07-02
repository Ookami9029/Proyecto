const titulo=document.getElementById("titulo");
const resultado=document.getElementById("resultado");
let contador_global=1;


// EVENTO PARA DARLE UN EFECTO AL BOTÓN AL ENTRAR Y SALIR EL MOUSE DEL RECUADRO
const btn_nombres=document.getElementById("btn_nombres");
btn_nombres.addEventListener ('mouseover', () => {
    btn_nombres.style.backgroundColor='lightgreen';
});
btn_nombres.addEventListener('mouseout', ()=>{
    btn_nombres.style.backgroundColor='';
});


// MISMO EVENTO PARA EL SEGUNDO BOTÓN
const btn_generar=document.getElementById("btn_generar");
btn_generar.addEventListener ('mouseover', () => {
    btn_generar.style.backgroundColor='lightgreen';
});
btn_generar.addEventListener('mouseout', ()=>{
    btn_generar.style.backgroundColor='';
});

const txt_general=document.getElementById("txt_general");
const nombre_guardado=document.createElement('h3');
nombre_guardado.id='nombre_guardado';
txt_general.insertAdjacentElement('afterend', nombre_guardado);

const input_nombres=document.getElementById("input_nombres");
const vector_nombres=[];
input_nombres.addEventListener("keydown", function(event){
    if (event.key==="Enter"){
        let nombre_introducido=input_nombres.value;
        vector_nombres.push(nombre_introducido);
        input_nombres.value="";
        nombre_guardado.innerHTML=``;
        contador_global++;
        nombre_guardado.innerHTML=`Ingresa el ${contador_global}° nombre`;
        if(contador_global>=16){
            input_nombres.disabled=true;
            generar(vector_nombres);
            alert("No se pueden ingresar mas jugadores");
        }
    }
});
function generar(vector_nombres){
    input_nombres.disabled=true;
    nombre_guardado.innerHTML=`<b>Los nombres se guardaron correctamente</b>`;
    let vector_apuesta=[];
    for(a=0; a<4; a++){
        for(b=0; b<4; b++){
            vector_apuesta.push(`${a}-${b}`);
        }
    };
    let vector_backup=[...vector_apuesta];
    console.log(vector_apuesta);
    resultado.style.whiteSpace='pre-line';
    resultado.textContent=``;
    for(c=0; c<vector_nombres.length; c++){
        let aleatorio=Math.floor(Math.random()*vector_backup.length);
        resultado.textContent+=`${vector_nombres[c]}: ${vector_backup[aleatorio]}\n`;
        vector_backup.splice(aleatorio,1);
    }
};