// POKEAPI
// https://pokeapi.co/
// ENDPOINTS
// https://pokeapi.co/api/v2/pokemon

// #1 instarciar request (para hacer peticiones) 
const request = require('request');

// #2 declarar la URI de la api
const URI = 'https://pokeapi.co/api/v2/pokemon/';

//Declarar Promesa
function obtenerPokemonPorNombre(nombre) {
    return new Promise((resolve,reject)=>{
        request.get(URI+nombre,function(error,response,body){
            if(response.statusCode === 200)
            {
                const bodyJSON = JSON.parse(body);// {"nombre":"pikachu"}
                // AQUI LA PROMESA SE CUMPLE
                resolve(bodyJSON); // RESOLVE : Devuelve la info correcta mediante la promesa
            }else
            {
                // LA PROMESA NO SE PUDO CUMPLIR ENTONCES REGRESA REJECT
                reject("NO SE PUDO OBTENER LA INFORMACION DEL POKEMON")
            }
        });
    })
}

function obtenerInfoPokemon( nombre){
    console.log("se busca la informacion del pokemon",nombre); // 1
    
    // MANDA LLAMAR PROMESA // 1 minuto
    obtenerPokemonPorNombre(nombre)
    .then( (infoPokemon) =>{ // {"nombre":"pikachu"}
        console.log("la promesa fue correcta"); // 3
        //console.log(infoPokemon); // 4
    })
    .catch((e)=>{
        console.log("la promesa devolvio un error"); // 2
        console.log(e);
    })
    // AQUI TERMINA EL LLAMADO A LA PROMESA
    
    console.log("Finalizando informacion del pokemon",nombre); // 2
}

obtenerInfoPokemon("charmander");
obtenerInfoPokemon("pikachu");
obtenerInfoPokemon("nanana");
