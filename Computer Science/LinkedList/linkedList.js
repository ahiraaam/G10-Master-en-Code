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
  delete(data) {
    let currentNode = this.head;
    let auxNode = null; //nos ayuda a almacenar el nodo a reconectar
    if (currentNode.data === data) {
      this.head = currentNode.next;
    } else {
      while (currentNode.data !== data && currentNode.next !== null) {
        auxNode = currentNode; // guardar el nodoActual por si se ocupa
        currentNode = currentNode.next;
      } //auxNode= Arnold ; currentNode = Adrian
      auxNode.next = currentNode.next; //Adrian
    }
  }
  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode); //40 , 20
      currentNode = currentNode.next;
    }
  }

  //TO-DO: addNodeEnd, searchNode
}

const listaDePersonas = new LinkedList();
listaDePersonas.addNodeStart("Adrian");
listaDePersonas.addNodeStart("Arnold");
listaDePersonas.addNodeStart("Merly");
listaDePersonas.print();
listaDePersonas.delete("dsf");
console.log(listaDePersonas);
