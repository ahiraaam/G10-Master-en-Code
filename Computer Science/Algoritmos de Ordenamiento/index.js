function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    //console.log("Vuelta", i);
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        //Verificamos si mi actual es mayor
        // Intercambiar mis valores
        let valorActual = array[j];
        array[j] = array[j + 1];
        array[j + 1] = valorActual;
      }
      //console.log("Arreglo ", array);
    }
  }
  return array;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let posicion = i;
    let valorActual = array[i];
    while (valorActual < array[posicion - 1]) {
      array[posicion] = array[posicion - 1];
      posicion = posicion - 1;
    }
    array[posicion] = valorActual;
    //console.log("Array de vuelta", array);
  }
  return array;
}
////////////****INSERTION SORT****/////////////
// Array inicial --> [10, 2, 6, 1, 9, 7, 3, 4];
//PRIMERA ITERACION DEL FOR
// i = 1 ; posicion = 1; valorActual = 2
// 2 < 10 ; posicion-1 = 0
// array[1] = 10;  ---> [10, 10, 6, 1, 9, 7, 3, 4] ; la posicion ahora es 0
// array[0] = 2; ----> [2, 10, 6, 1, 9, 7, 3, 4]

//SEGUNDA ITERACION DEL FOR
// i = 2 ; posicion = 2; valorActual = 6
// 6 < 10; posicion-1 = 1
// array[2] = array[1]  --> [2, 10, 10, 1, 9, 7, 3, 4]; la posicion ahora es 1
// 6 < 2 ; valorActual(6) < array[1-1] || array[0]
// array[1] = 6 ---> [2, 6, 10, 1, 9, 7, 3, 4]

//TERCERA ITERACION DEL FOR
// i = 3 ; posicion = 3; valorActual = 1
// 1 < 10 ; porque posicion-1= 10
// array[3] = array[2] -->[2, 6, 10, 10, 9, 7, 3, 4]; la posicion se actualiza a 2
// 1 < 6; posicion-1 = 1
// array[2]=array[1] --> [2, 6, 6, 10, 9, 7, 3, 4]; la posicion se actualiza 1
// 1 < 2; porque posicion-1 = 0
// array[1] = array[0] --> [2, 2, 6, 10, 9, 7, 3, 4]; la posicion se actualiza a 0
// 1 < nada entonces se termina el ciclo
// array[0] =  1 --> [1, 2, 6, 10, 9, 7, 3, 4]

////////////**** SELECTION SORT ****/////////////
// Recordemos que en este algoritmo buscamos encontrar
// el mínimo en cada iteración para poder colocarlo en
// la posicion de la iteracion actual.
function selectionSort(array) {
  //Como en el Bubble sort vamos a tener dos "for"
  // Este primero nos va a servia dar las vueltas por el array
  for (let i = 0; i < array.length; i++) {
    //Obtenemos la posicion donde esta el valor mínimo
    //En este momento el mínimo es el que esta en nuestra posicion i
    let minimo = i;
    //Este segundo "for" nos va a servir para ir buscando el
    //número con el valor mínimo a partir de la posición actual
    //¿Porque a partir de la posición actual?
    //Porque lo que esta antes de la posición actual YA esta ordenado
    for (let j = i + 1; j < array.length; j++) {
      //Si nuestro número que esta en la posición "Mínimo" es mayor que
      //el que esta en j, entonces significa que EL MÍNIMO ES EL QUE ESTA EN J
      if (array[minimo] > array[j]) {
        //Actualizamos la posición del MÍNIMO
        minimo = j;
      }
    }
    //Ya que recorrimos toodo el array ya sabemos en que posición
    //está el valor mínimo, entonces vamos a intercambiar el valor
    //del mínimo con el de la posición actual. Si el mínimo es el de
    //nuestra posición actual entonces no tenemos que intercambiar nada
    if (minimo !== i) {
      //Guardamos el valor de la posición actual
      let temp = array[i];
      //A la posición actual le asignamos el mínimo
      array[i] = array[minimo];
      //Donde estaba el mínimo le ponemos el valor de la posición actual
      array[minimo] = temp;
    }
    //console.log(array);
  }
  return array;
}

///EJEMPLO DE COMO FUNCIONA SELECTION SORT
// Array inicial --> [10, 2, 6, 1, 9, 7, 3, 4];

//PRIMERA ITERACIÓN DEL PRIMER FOR
// i = 0 ; minimo = 0
////// Para nuestro segundo for: j = i+1 = 1, es decir empezamos en la posicion 1
////// Empezamos a iterar:
////// Si array[minimo] > array[j] === array [0]>array[1] === ¿10 > 2?
////// En esta primera iteracion SI ES MENOR entonces minimo = j es decir minimo = 1 *Recuerda que mínimo es la posicion*
////// Seguimos con el for: ahora j = 2; minimo = 1 ---> 2 > 6 : NO, siguiente iteracion
////// Seguimos con el for: ahora j = 3; minimo = 1 ---> 2 > 1 : SI entonces minimo = j es decir minimo = 3
////// Seguimos con el for: ahora j = 4; minimo = 3 ---> 1 > 4 : NO, siguiente iteracion
////// Seguimos con el for: ahora j = 5; minimo = 3 ---> 1 > 7 : NO, siguiente iteracion
////// Seguimos con el for: ahora j = 6; minimo = 3 ---> 1 > 3 : NO, siguiente iteracion
////// Seguimos con el for: ahora j = 7; minimo = 3 ---> 1 > 4
////// Termina iteración del segundo for. Entonces ejecutamos el if
////// ¿ Minimo(3) !== i(0) ? **Recuerda que hablamos de la posicion, es decir preguntamos 3 es diferende de 0 (pues si)
////// SI ES DIFERENTE, ENTONCES ---> temp = 10; array[0] = 1; array[3] = 10
////// TERMINA PRIMERA ITERACION DEL PRIMER FOR quedando el arreglo así --> [1, 2, 6, 10, 9, 7, 3, 4];

//SEGUNDA ITERACIÓN DEL PRIMER FOR
/// Array actualment = [1, 2, 6, 10, 9, 7, 3, 4];
// i = 1 ; minimo = 1
////// Para nuestro segundo for: j = i+1 = 2, es decir empezamos en la posicion 2
////// Empezamos a iterar:
////// Si array[minimo] > array[j] === array [1]>array[2] === ¿2 > 6?  : NO, siguiente iteracion
////// Seguimos con el for: ahora j = 3; minimo = 1 ---> 2 > 10 : NO, siguiente iteracion
////// Seguimos con el for: ahora j = 4; minimo = 1 ---> 2 > 9 : NO, siguiente iteracion
////// Seguimos con el for: ahora j = 5; minimo = 1 ---> 1 > 7 : NO, siguiente iteracion
////// Seguimos con el for: ahora j = 6; minimo = 1 ---> 1 > 3 : NO, siguiente iteracion
////// Seguimos con el for: ahora j = 7; minimo = 1 ---> 1 > 4 : NO
////// Termina iteración del segundo for. Entonces ejecutamos el if
////// ¿ Minimo(1) !== i(1) ? **Recuerda que hablamos de la posicion, es decir preguntamos 3 es diferende de 0 (pues no)
////// NO ES DIFERENTE, ENTONCES no cambia nada
////// TERMINA PRIMERA ITERACION DEL PRIMER FOR quedando el arreglo igual --> [1, 2, 6, 10, 9, 7, 3, 4];

//TERCERA ITERACIÓN DEL PRIMER FOR
// i = 2 ; minimo = 2
/// Array actualment = [1, 2, 6, 10, 9, 7, 3, 4];
////// Para nuestro segundo for: j = i+1 = 3, es decir empezamos en la posicion 3
////// Empezamos a iterar:
////// Si array[minimo] > array[j] === array[2]>array[3] === ¿6 > 10? : NO, siguiente iteracion
////// Seguimos con el for: ahora j = 4; minimo = 2 ---> 6 > 9 : NO, siguiente iteracion
////// Seguimos con el for: ahora j = 5; minimo = 2 ---> 6 > 7 : NO, siguiente iteracion
////// Seguimos con el for: ahora j = 6; minimo = 3 ---> 6 > 3 : SI entonces minimo = j es decir minimo = 6
////// Seguimos con el for: ahora j = 7; minimo = 6 ---> 3 > 4 : NO
////// Termina iteración del segundo for. Entonces ejecutamos el if
////// ¿ Minimo(6) !== i(2) ? **Recuerda que hablamos de la posicion, es decir preguntamos 6 es diferende de 2 (pues si)
////// SI ES DIFERENTE, ENTONCES ---> temp = 6; array[2] = 3; array[6] = 6
////// TERMINA TERCERA ITERACION DEL PRIMER FOR quedando el arreglo así --> [1, 2, 3, 10, 9, 7, 6, 4];

const arreglo1 = [10, 2, 6, 1, 9, 7, 3, 4];
console.log("Buble Sort", bubbleSort(arreglo1));
console.log("Insertion Sort", insertionSort(arreglo1));
console.log("Selection Sort", selectionSort(arreglo1));
