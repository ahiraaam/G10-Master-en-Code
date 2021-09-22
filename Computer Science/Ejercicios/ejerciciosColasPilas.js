/*
1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe hacer “pop” de tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’]

*/

/*
function multiPop( miPila, num  ){

    for( let i=0; i < num; i++ )
    {
        console.log(miPila.peek());
        miPila.pop();
    }
}

const pilaFrutas = new Pila();
pilaFrutas.push("Manzana");
pilaFrutas.push("Cebolla");
pilaFrutas.push("Apio");
pilaFrutas.push("Naranja");
pilaFrutas.push("Papaya");
pilaFrutas.push("Sandía");
pilaFrutas.push("Melón");

console.log(pilaFrutas); // 7
setTimeout(()=>{
    multiPop(pilaFrutas,4);
    console.log(pilaFrutas); // 3
},5000)

*/


/*2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, 
y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún 
lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los siguientes elementos.
Entrada: reemplazar(
        [3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]
*/

function reemplazar(miPila, nuevo,viejo)
{
    const auxPila = new Pila();
    for(let i=0; i < miPila.size(); i++)
    {
        if ( miPila.peek() === viejo )
        {
            
        }
    }
}

/**
    3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
    pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
    camino. Muestre el camino recorrido tanto de ida como de vuelta. 
    Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
    Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
 */
    /*
    function mostrarCamino(recorrido){
        let mostrarCamino = "";
        let auxSize = recorrido.size(); // 4 = 3 = 2  index 2 < 2

        const auxPila = new Pila();
        const auxArray = [];

        for (let index = 0; index < auxSize; index++) { 
            
            mostrarCamino += recorrido.peek(); // Destino
            auxPila.push(recorrido.peek());

            auxArray.push(recorrido.peek());

            if(index != auxSize -1 )
            {
                mostrarCamino += " -> ";
            }

            recorrido.pop();
        }

        // Opcion 1 Adrian 
        auxArray.reverse();
        const caminoIdaAdrian = auxArray.join('->');
        
        console.log("adrian: recorrido",caminoIdaAdrian);

        // Jhon 
        const array = mostrarCamino.split('->');
        array.reverse();
        const caminoJhon = array.join('->');
        console.log("jhon: recorrido",caminoJhon);

        // Opcion 3 

        let stringRecorrido = "";
        auxSize = auxPila.size();

        for (let index = 0; index < auxSize; index++) { 
            
            stringRecorrido += auxPila.peek();

            if(index != auxSize -1 )
            {
                stringRecorrido += " -> ";
            }

            auxPila.pop();
        }

        console.log("Carlos Recorrido:", stringRecorrido);

        console.log( "regreso:", mostrarCamino);
    }

    const recorrido = new Pila(); // pila que almacena los destinos NOTA : el peek retorna el ultimo elemento en enrar a la pila

    // agregamoos camino
    recorrido.push("Pueblo Origen");
    recorrido.push("Pueblo 1");
    recorrido.push("Pueblo 2");
    recorrido.push("Destino");

    mostrarCamino(recorrido);

    */


    /*
        Colas ejercicios
 
5.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]

*/

function dividirCola( colores )
{
    const colaPares = new Colas();
    const colaNones = new Colas();

    const auxSize = colores.size()

    for (let index = 0; index < auxSize; index++) {
        
        if( (index % 2) == 0 ) // par
        {
            colaPares.enqueue(colores.front());
        }else // none
        {
            colaNones.enqueue(colores.front());
        }

        colores.dequeue();
    }

    colaPares.print();
    colaNones.print();
}

const cola = new Colas();

cola.enqueue('amarillo'); //0
cola.enqueue('rosa'); // 1
cola.enqueue('rojo'); // 2
cola.enqueue('verde');
cola.enqueue('azul');
cola.enqueue('negro');
cola.enqueue('morado');
cola.enqueue('blanco'); // 8

dividirCola(cola);


/*
 
6.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
 
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
 
Cola: [
{ user:‘User1’, ticket:true },
{ user:‘User2’, ticket:true },
{ user:‘User3’, ticket:false },
{ user:‘User4’, ticket:true },
{ user:‘User5’, ticket:false },
{ user:‘User6’, ticket:false },
{ user:‘User7’, ticket:true },
{ user:‘User8’, ticket:true },
{ user:‘User9’, ticket:true },
{ user:‘User10’, ticket:false },
{ user:‘User11’, ticket:true },
];

    */

