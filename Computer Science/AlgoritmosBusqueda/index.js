//BUSQUEDA LINEAL -

function busquedaLineal(arreglo, datoBuscado) {
  for (let i = 0; i < arreglo.length; i++) {
    const element = arreglo[i]; //Obtener el elemento en el indice actual
    if (element === datoBuscado) {
      return element;
    }
    //element === datoBuscado ? element : null;
  }
  return false;
}
const arreglo1 = ["Carlos", "Luis", "Oliver", "Arnold", "Martin"];
const arreglo2 = [34, 32, 8, 93, 2, 84, 90, 100, 1, 3];

console.log(busquedaLineal(arreglo2, 90));
console.log(busquedaLineal(arreglo2, 100));
console.log(busquedaLineal(arreglo1, "Oliver"));

// Busqueda Binaria
function busquedaBinaria(arreglo, datoBuscado) {
  var minimo = 0;
  var maximo = arreglo.length;
  var mitad = 0;
  //Minimo no puede ser mayor o igual al maximo
  while (minimo <= maximo) {
    mitad = Math.floor((maximo + minimo) / 2); //posicion a la mitad
    console.log("Mitad - posicion en el arreglo", mitad);
    if (arreglo[mitad] === datoBuscado) {
      return arreglo[mitad];
    } else if (datoBuscado > arreglo[mitad]) {
      //El elemento esta después de la mitad
      minimo = mitad + 1;
    } else {
      //El elemento es menor a la mitad
      maximo = mitad - 1;
    }
  }
}

const arregloOrdenado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(busquedaBinaria(arregloOrdenado, 1));
