function saludar() {
    console.log("Este mensaje se ha enviado desde una función");
}
saludar();

function escribir(texto) {
    console.log(texto)
}
escribir("Hola! este mensaje se muestra desde una función con parametros!")

function suma(a, b) {
    return a + b;
}
let operacion = suma(1, 3);
console.log(operacion);
