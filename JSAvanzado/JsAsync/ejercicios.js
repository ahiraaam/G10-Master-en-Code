// Ejercicio
//Crear una función que reciba como argumento una variable de cualquier tipo y un callback.
//La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido.

function callback(variable) {
  return `El tipo de dato es ${typeof variable} su contenido es ${variable}`;
}

function mainFunction(variable, callback) {
  console.log(callback(variable));
}

//Ejecuto la funcion principal
mainFunction(30, callback);
