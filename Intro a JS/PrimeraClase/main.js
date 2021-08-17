//Formas de salida en JS

console.log("Hola mundo desde MAIN.JS");
console.log(2 + 2);
console.log(3 < 1);
document.write("Ya regresamos");
alert("Esta es una alerta");

//Ingresar datos en JS

prompt("Dime tu nombre");

//Ingresar datos e imprimir

console.log("Hola, tu edad es: ", prompt("Dime tu edad"), ". Adios");
console.log("Adios");

//Este es un comentario de una sola línea

/*
    Esta es un comentario 
    de muchas lineas
    aaaa
    aaa
*/

var estadoSemaforo = prompt("Dame un color").toLowerCase();

if (estadoSemaforo == "verde") {
  console.log("Puedes avanzar");
} else if (estadoSemaforo == "amarillo") {
  console.log("Avanza con precaución");
} else if (estadoSemaforo == "rojo") {
  console.log("Detente");
} else {
  console.log("Dame un color que sea válido");
}
