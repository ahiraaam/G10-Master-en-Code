//1.- Hacer una petición a la PokeAPI para obtener cualquier Pokémon.  Muestra sus tipos en consola mediante un for.

function obtenerDatosPokemon(nombre){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then( response =>{
            //se cumplio promesa
            if(response.status === 200)
            {
                let imgurl = response.data.sprites.front_default;
                // CON MAP
                response.data.types.map(item => {
                    console.log(item.type.name);
                    mostrarTipo(item.type.name,imgurl);
                });

                // CON FOR
                console.log("desde for");
                for( let i=0; i < response.data.types.length; i++ ){
                    console.log( response.data.types[i].type.name );
                    mostrarTipo(response.data.types[i].type.name,response.data.sprites.front_default);

                }


            }else{
                console.log("NO SE ENCONTRO LA INFORMACION");
            }
        })
        .catch( e =>{
            console.log(e);
            }
        );

}

function obtenerPokemons()
{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=151")
    .then(response =>{
        if(response.status === 200)
        {
            response.data.results.map(item =>{
                console.log(item.name);
                mostrarPokemons(item.name)
            })
        }else
        {
            alert("NO SE OBTUVO INFORMACION");
        }
    })
    .catch(error =>{})
}

function mostrarPokemons(nombre){
    let body = document.getElementById("body");
    let tagLabel = document.createElement("label");
    tagLabel.textContent = nombre;

    body.appendChild(tagLabel);
}

//tipos - arreglo
function mostrarTipo(tipo,imgUrl){
    let body = document.getElementById("body");

    let nombreTipo = document.createElement("h1");
    nombreTipo.innerText = tipo;

    let imgPokemon = document.createElement("img");
    imgPokemon.src = imgUrl;

    body.appendChild(nombreTipo);
    body.appendChild(imgPokemon);
}

//obtenerDatosPokemon("charizard")
obtenerPokemons();