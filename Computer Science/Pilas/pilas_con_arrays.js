class Pila {
  constructor() {
    this.pila = [];
  }
  //Agregar un elemento al final de la pila
  push(item) {
    this.pila.push(item);
    return this.pila;
  }
  //Elimina el último elemento de la pila
  pop() {
    return this.pila.pop();
  }
  //Info del último elemento
  peek() {
    return this.pila[this.pila.length - 1];
    // [1,2,3,4,5]
    // Primer elemento arreglo[0]
    // Último agrega arreglo[5]
  }
  size() {
    return this.pila.length;
  }
  print() {
    console.log(this.pila);
  }
}

/*
const pila1 = new Pila();
pila1.push("Libro 1"); // ["Libro1"]
pila1.push("Libro 2"); // ["Libro1", "Libro2"]
pila1.push("Libro 3"); // ["Libro1", "Libro2", "Libro3"]
pila1.push("Libro 4"); // ["Libro1", "Libro2", "Libro3", "Libro4"]
/*setTimeout(() => {
  pila1.pop();
}, 3000);
console.log("Pop", pila1.pop()); //  "Libro4"
console.log(pila1); // ["Libro1", "Libro2", "Libro3"]
console.log("Peek", pila1.peek()); // "Libro3"
pila1.print(); // ["Libro1", "Libro2", "Libro3"]

*/