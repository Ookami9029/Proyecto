const titulo=document.getElementById("titulo");
const resultado=document.getElementById("resultado");
const boton=document.getElementById("btn");
boton.addEventListener ('mouseover', () => {
    boton.style.backgroundColor='lightgreen';
})
boton.addEventListener('mouseout', ()=>{
    boton.style.backgroundColor='';
})