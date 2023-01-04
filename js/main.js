

const intereses = 0.73;
function valorIntereses(dineroInvertido) {
    return dineroInvertido + (dineroInvertido * intereses)
}

let dineroInvertido;
do {
    dineroInvertidoIngresado = prompt("Ingrese el dinero para invertir, para salir ESC");
    const dineroInvertido = parseFloat(dineroInvertidoIngresado)
    if (dineroInvertido > 0) {
        alert("Obtendra anualmente: $" + valorIntereses(dineroInvertido));

    }

} while (dineroInvertidoIngresado !== "ESC");


