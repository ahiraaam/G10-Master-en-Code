class Colas{ // FIFO: First IN First Out
    constructor(){
        this.cola = [];
    }

    enqueue(item){ // agrega un elemento a la cola
        this.cola.push(item);
        return this.cola;
    }

    dequeue() // extrae primer elemento de la cola
    {
        return this.cola.shift();
    }

    peek()  // obtiene el primer elemento sin extraerlo
    {
        return this.cola[0];
    }

    front() // Nos retorna el primer elemento de la cola
    {
        return this.cola[0];
    }

    back() // Nos retorna el ultimo elemento agregado a la cola
    {
        return this.cola[this.cola.length - 1 ];
    }

    size() // retorna el tamaño de la cola
    {
        return this.cola.length;
    }

    print() // muestra el contenido de la cola
    {
        console.log(this.cola);
    }

    isEmpty(){
        if (this.cola.length > 0)
            return false;
        else
            return true;
    }

}


const colaAlumnos = new Colas();

console.log(colaAlumnos.isEmpty());
console.log(colaAlumnos.size());

colaAlumnos.enqueue("Arnold");
colaAlumnos.enqueue("Luis Rogerio");
colaAlumnos.enqueue("Fiorella");
colaAlumnos.enqueue("Paola");
colaAlumnos.enqueue("Oliver");

console.log(colaAlumnos.size());

console.log(colaAlumnos.isEmpty())

colaAlumnos.print();


console.log(colaAlumnos.front()); // Arnold
console.log(colaAlumnos.back()); // oliver

colaAlumnos.dequeue();
console.log(colaAlumnos.size());

console.log(colaAlumnos.front()); // Luis Regerio
console.log(colaAlumnos.back()); // Paola, Oliver

colaAlumnos.print();

colaAlumnos.enqueue("Ahiram");

console.log(colaAlumnos.front()); // Ahiram / Luis
console.log(colaAlumnos.back()); // ahiram

colaAlumnos.print();
console.log(colaAlumnos.size());
