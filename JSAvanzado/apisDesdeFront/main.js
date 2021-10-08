/** realizar peticion con axios */

const URI = 'https://pokeapi.co/api/v2/pokemon?limit=10';

axios.get(URI)
    .then((response)=>{
        console.log(response.status); // STATUS PETICION
        console.log(response.data); // INFO POKEMON

        let html = '';
        /*
        if(response.status === 200)
        {
            html = `<h1> ${response.data.name} </h1>
                    <ul>
                    <li> PESO : <strong>${response.data.weight}</strong> </li>
                    <li> ALTURA : <strong>${response.data.height}</strong> </li>
                    </ul>`;
        }else
        {
            html = `<h1> NO SE ENCONTRO LA INFORMACION DEL POKEMON </h1>`;
        }
        */

        if(response.status === 200)
        {
            for (let i =0; i< response.data.results.length;i++)
            {
                const infopokemon = response.data.results[i];
                html += `<h1> ${infopokemon.name} </h1>`;
            }
        }else
        {
            html = `<h1> NO SE ENCONTRO LA INFORMACION DEL POKEMON </h1>`;
        }

        let body = document.getElementById("body");
        body.innerHTML = html;


    }).catch((e)=>{
        console.log(e);
    })