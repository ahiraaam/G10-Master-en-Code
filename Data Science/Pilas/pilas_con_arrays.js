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
  size() {}
}

const pila1 = new Pila();
pila1.push(1);
pila1.push(2);
pila1.push(3);
pila1.push(4);
console.log("Pop", pila1.pop());
console.log(pila1);
console.log("Peek", pila1.peek());
console.log(pila1);
