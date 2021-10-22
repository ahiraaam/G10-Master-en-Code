const base_url_images = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
const base_url_sprites = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const obtenerPokemons = ()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1118`)
    .then( (response)=> {
        if(response.status === 200)
        {
            crearTarjetas(response.data.results);
            
            $('#list-pokemon li').on('click', function(e){
                $('#list-pokemon').animate({scrollTop: $(e.target).position().top + $('div').scrollTop()});
                mostrarDatosPokemon(this);
            });
            
            mostrarDatosPokemon(document.getElementById("1"));
        }
        else
            console.log("error");
    })
}

const mostrarDatosPokemon = (li)=>{
    //primero eliminamos la pokeball;
    document.getElementById("pokeball") ? document.getElementById("pokeball").remove() : null;

    const img = document.getElementById("selectImg");
    img.src = base_url_images + String(li.id).padStart(3, '0') + ".png";

    let pokeimg = document.createElement("img");
    pokeimg.src = "https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-2.png";
    pokeimg.id = "pokeball";

    axios.get( `https://pokeapi.co/api/v2/pokemon/${li.id}` )
        .then( response =>{
            document.getElementById("hp").innerText = response.data.stats[0].base_stat;
            document.getElementById("bar-hp").style.width = `${response.data.stats[0].base_stat}%`;

            document.getElementById("atq").innerText = response.data.stats[1].base_stat;
            document.getElementById("bar-atq").style.width = `${response.data.stats[1].base_stat}%`;

            document.getElementById("def").innerText = response.data.stats[2].base_stat;
            document.getElementById("bar-def").style.width = `${response.data.stats[2].base_stat}%`;

            document.getElementById("satq").innerText = response.data.stats[3].base_stat;
            document.getElementById("bar-satq").style.width = `${response.data.stats[3].base_stat}%`;

            document.getElementById("sdef").innerText = response.data.stats[4].base_stat;
            document.getElementById("bar-sdef").style.width = `${response.data.stats[4].base_stat}%`;

            document.getElementById("vel").innerText = response.data.stats[5].base_stat;
            document.getElementById("bar-vel").style.width = `${response.data.stats[5].base_stat}%`;
        })

    li.appendChild(pokeimg);
}

const crearTarjetas = (arrayDatos) =>{
    let pokeList = document.getElementById("list-pokemon");
    arrayDatos.map(item => {
        let id = item.url.split("/").slice(-2)[0];

        let pokeLi = document.createElement("li");
        pokeLi.id = id;

        let imgCard = document.createElement("img");
        imgCard.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        imgCard.classList.add("card-img-top");
        pokeLi.appendChild(imgCard);

        let spanNumber = document.createElement("span");
        spanNumber.classList.add("number");
        spanNumber.innerText =`# ${String(id).padStart(3, '0')}`;
        pokeLi.appendChild(spanNumber);

        let spanName = document.createElement("span");
        spanName.classList.add("name");
        spanName.innerText = item.name;
        pokeLi.appendChild(spanName);

        pokeList.appendChild(pokeLi);

        /**
            <li>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="">
                <span class="" >N.º 001</span>
                <span class="name" >Bulbasaur</span>
            </li>
         */
        
    })
}

(function () {
    obtenerPokemons();
})();
