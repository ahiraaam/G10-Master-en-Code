// destructuring {  } en objetos;

let pokemon = {
    posicion:4,
    nombre:"charmander",
    evolucion:"charmeleon",
    ataque:"ember"
}

console.log(pokemon.nombre);

/* Destructuring */

const { nombre,ataque,evolucion } = pokemon;

console.log("{ destructuring -> }",nombre);

/* Vanilla */
let nombre2,ataque2, evolucion2;

let nombre3 = pokemon.nombre;
let ataque3 = pokemon.ataque;

/*
if(pokemon.nombre){}
if(pokemon.evolucion){}
*/

// Destructuring con Arrays [ ]

//NOTA: es importante respetar los indices

console.log("Destructurado con arreglos");

let pokemons = [ "charmander","pikachu", "Snorlax","charizard" ];

const [ pokemon1,pokemon2,pokemon3 ] = pokemons;
console.log(pokemon1,pokemon2,pokemon3);

// equivalente con vanilla

const charmander1 = pokemons[0];

//TIP: reemplazar los elementos que no necesitamos con _

const [ pokemon4,_,__,pokemon5 ] = pokemons;

console.log(pokemon4, pokemon5);


// Combinar con spreed

const a=[1,2,3,4,5,6];
const [x,y,...resto] = a
console.log(resto) // retorna [3,4,5,6]