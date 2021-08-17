var columnaA = [
  "En cuanto arreglemos el goteo de recursos",
  "En cuanto completemos las pruebas",
  "En cuanto hayamos optimizado el código",
  "Apenas nos arregle el bug",
  "Cuando se solvente el problema de instalación",
  "Cuando averiguemos por qué se cae el proceso",
];

var columnaB = [
  "del interfaz XML",
  "del sistema de colas",
  "del buffer de entrada",
  "del gestor de peticiones",
  "de las clases de abstracción",
  "del recolector de basura",
];

var columnaC = [
  "del director LDPA",
  "de la máquina virtual JAVA",
  "del proxy inverso",
  "del gestor del cluster",
  "del broker de objetos distribuido",
  "de la capa de presentación",
];

//Obtener un indice aleatorio para cada columna
var numeroColumnaA = Math.floor(Math.random() * columnaA.length); // Entre 0 y 6
var numeroColumnaB = Math.floor(Math.random() * columnaB.length);
var numeroColumnaC = Math.floor(Math.random() * columnaC.length);

console.log(numeroColumnaA, numeroColumnaB, numeroColumnaC);

//Concatenamos nuestras frases obtenidas
var frase =
  columnaA[numeroColumnaA] +
  " " +
  columnaB[numeroColumnaB] +
  " " +
  columnaC[numeroColumnaC];

//Mostramos la frase en el HTML
document.write(frase);

//Imprimimos en consola la frase
console.log(
  columnaA[numeroColumnaA],
  columnaB[numeroColumnaB],
  columnaC[numeroColumnaC]
);
