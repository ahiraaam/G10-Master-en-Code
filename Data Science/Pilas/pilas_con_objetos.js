class Pila {
  constructor() {
    this.pila = {}; //{0: 1, 1: 2, 2: 4}
    this.contador = 0;
    /*
    {
        0: "Ahiram",
        1:"Cruz",
    }
    objeto.nombre 
    */
  }
  push(item) {
    this.pila[this.contador] = item;
    this.contador++;
    return this.pila;
  }
  pop() {
    this.contador--;
    //Sacamos el elemento que necesito
    const item = this.pila[this.contador];
    //Eliminar de la pila
    delete this.pila[this.contador];
    //Regresamos el elemento
    return item;
  }
}

const pilaObjetos = new Pila();
pilaObjetos.push("Libro 1"); //{0:1} //Al final el contador es 1
pilaObjetos.push("Libro 2"); //{0:1, 1:2} //Al final el contador es 2
alert(JSON.stringify(pilaObjetos.pila));
console.log(pilaObjetos.pop());
console.log(pilaObjetos);
