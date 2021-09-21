// Crear clase Nodo

class Node {
  constructor(data) {
    this.data = data; //Lo que vamos a guardar
    this.next = null; //Nos va a indicar el nodo siguiente
  }
}
// Clase de Lista
// Métodos:
// -agregar un nodo (al inicio y al final)
// -eliminar un nodo,
// -buscar un nodo
// -recorrer la lista
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //Agregar un nodo al inicio
  addNodeStart(data) {
    const node = new Node(data); // Creamos el nuevo nodo con la data
    if (this.head === null) {
      // ¿nuestra cabeza está vacia? Si si entonces...
      this.head = node;
    } else {
      //Cuando NO es el primer nodo agregado
      node.next = this.head; //este nuevo nodo apunta a la cabeza
      this.head = node; // cabeza ahora es este nodo
    }
  }
}
