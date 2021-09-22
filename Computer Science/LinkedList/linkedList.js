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
    this.length++;
  }
  //Agregar nodo al final
  addNodeEnd(data) {
    const node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  }
  //Eliminar un nodo por su dato
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
  //Obtener un nodo por su index
  getNode(index) {
    //getIndex(2)
    if (this.head === null || index > this.length) {
      return null;
    } else {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        counter++;
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }
  //Imprimir la lista
  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode); //40 , 20
      currentNode = currentNode.next;
    }
  }
}

const listaDePersonas = new LinkedList();
listaDePersonas.addNodeEnd("Adrian");
listaDePersonas.addNodeEnd("Arnold");
listaDePersonas.addNodeEnd("Merly");
listaDePersonas.addNodeEnd("Ahiram");
listaDePersonas.print();
console.log(listaDePersonas.getNode(2));
