function saludar(nombre) {
  alert("Hola " + nombre);
}
function adios(nombre) {
  alert("Adios " + nombre);
}
function procesarEntradaUsuario(callback) {
  var nombre = prompt("Por favor ingresa tu nombre.");
  callback(nombre);
}
procesarEntradaUsuario(saludar);

///////////
function soyCien() {
  return 100;
}
function SoyDoscientos() {
  return 200;
}

/* Esta función recibe como parametro 2 funciones y las ejecuta */
function sumaDosFunciones(functionOne, functionTwo) {
  const suma = functionOne() + functionTwo();
  return suma; // retornando un nuevo valor, en este caso su suma
}

console.log("Hola");
setTimeout(function () {
  console.log("He ejecutado la función");
}, 2000);
console.log("Adios");

setTimeout(() => console.log("He ejecutado la función"), 2000);

//////////// Call Stack //////
function saludar() {
  console.log("Hola");
  console.log("Cómo estás?");
}

console.log(1);
console.log(2);
saludar();
console.log(3);

function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            console.log("Fin Callback");
            console.log("Callback Hell !!!!!😈🤘");
            console.log("http://callbackhell.com/");
          });
        });
      });
    });
  });
});

console.log("---Simulación de Cuello de Botella---");
console.log(1);
setTimeout(() => {
  return console.log(2);
}, 2000);
setTimeout(() => {
  for (let index = 0; index < 9999999999; index++);
}, 2000);
console.log(3);

// Ejercicio
//Crear una función que reciba como argumento una variable de cualquier tipo y un callback.
//La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido.

function evaluarVariable(variable) {
  console.log("El tipo de dato es", typeof variable, "su contenido", variable);
}

function mainFunction(variable, callback) {
  callback(variable);
}

mainFunction(30, evaluarVariable);
