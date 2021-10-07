
//pokemon API 

const request = require("request");

const URI = "https://pokeapi.co/api/v2/pokemon/";

function getPokemonByName(name)
{
    request.get(URI + name,function(err,response,body){

        if( response.statusCode === 200 )
        {
            const infoPokemonJson = JSON.parse(body);
            console.log("Habilidades");
            console.log(infoPokemonJson.abilities.map(item => item.ability.name));
        }else
        {
            console.log("Ocurrioun error durante la peticion");
        }
    })
}

getPokemonByName("pikachu");
getPokemonByName("gengar");
getPokemonByName("charizard");
getPokemonByName("mew");
getPokemonByName("onix");