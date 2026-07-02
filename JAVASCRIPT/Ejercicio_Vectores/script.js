function leerVector() {

    let vector = [];
    let contadorPares = 0;

    // Leer los 10 números
    for (let i = 0; i < 10; i++) {

        let numero = parseInt(
            prompt("Ingrese el número de la posición " + (i + 1))
        );

        vector.push(numero);

        // Verificar si es par
        if (numero % 2 === 0) {
            contadorPares++;
        }
    }

    document.getElementById("resultado").innerHTML =
        "<strong>Vector:</strong> [" + vector.join(", ") + "]<br>" +
        "<strong>Cantidad de números pares:</strong> " + contadorPares;
}