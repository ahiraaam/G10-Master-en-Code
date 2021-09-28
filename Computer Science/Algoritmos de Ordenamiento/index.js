function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("Vuelta", i);
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        //Verificamos si mi actual es mayor
        // Intercambiar mis valores
        let valorActual = array[j];
        array[j] = array[j + 1];
        array[j + 1] = valorActual;
      }
      console.log("Arreglo ", array);
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
    console.log("Array de vuelta", array);
  }
  return array;
}
////////////****INSERTION SORT****/////////////
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
const arreglo1 = [10, 2, 6, 1, 9, 7, 3, 4];
console.log(bubbleSort(arreglo1));
console.log(insertionSort(arreglo1));
