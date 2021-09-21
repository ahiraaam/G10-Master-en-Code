/*
1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe hacer “pop” de tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’]
*/
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


/*2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, 
y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún 
lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los siguientes elementos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
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