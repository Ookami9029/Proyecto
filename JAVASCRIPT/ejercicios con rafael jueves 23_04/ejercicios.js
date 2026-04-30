//usamos function para ejecutar el código en el momento que se presiona el botón
//con el atributo "onclick" en el html
function analizarUltimoDigito(){
    //obtener los números dados por el usuario por el id
    let valor1=document.getElementById('number1').value;
    let valor2=document.getElementById('number2').value;
    //convertir los números dados a números (ya que cuando los agarra los agarra com str)
    let num1=Number(valor1);
    let num2=Number(valor2);
    //hacer el analisis y decir si son iguales
    if (num1>0 && num2>0){
        let var1=num1%10;
        let var2=num2%10;
        if (var1==var2) {
            alert("Los ultimos digitos de ambos numeros son iguales");
        }
        else{
            alert("El ultimo digito de ambos numeros NO son iguales");
        }
    }
    else if (num1<=0 || num2<=0){
        alert("Uno de los números es negativo o es cero");
    }
}