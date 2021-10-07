/** GOOD Reads API */
// DOCUMENTACION : https://goodreads-devf-aaron.herokuapp.com/docs
// URL API : https://goodreads-devf-aaron.herokuapp.com/api/v1/

// instanciar la libreria de request para hacer peticiones
const request = require('request');

const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

//Obtener lista autores

const listarAutores = () =>{
    request.get(URI,function (err,response,body) {
        
        if(response.statusCode === 200)
        {
            const authors = JSON.parse(body);
            console.log(authors);
        }
    })
}

//Obtener autor por ID
// /{123} <--- MAL: las llaves indican que es una variable
// /123 <--- BIEN
const mostrarInfoAutor = (id) =>{
    request.get(URI + id,function(err,response,body) {
        if(response.statusCode === 200)
        {
            const author = JSON.parse(body);
            console.log(author);
        }
    })
}

const createAuthor = (jsonData) =>{
    const objConfig = {
        url:URI,
        form:jsonData
    }

    request.post(objConfig,function(err,response,body){

        if(response.statusCode === 201)
        {
            //el autor fue creado
            const author = JSON.parse(body);
            console.log(author);
        }else
        {
            console.log(response);
        }
    })
}

// actualizar info autor

const actualizarAuthor = (id,jsonInfoAutor) => {
    const objConfig = {
        url: URI + id + '/',
        form:jsonInfoAutor
    }

    request.patch(objConfig,function(err,response,body){

        if(response.statusCode === 200)
        {
            const author = JSON.parse(body);
            console.log(author);
        }else
        {
            console.log(response);
            console.log(err);
        }
    })
}


const deleteAutor = (id)=>{
    request.delete(URI+id+'/',function(err,response,body){
        if(response.statusCode == 204)
        {
            const author = JSON.parse(body);
            console.log(author);
        }else
        {
            console.log(response.statusCode, response.statusMessage);
        }
    })
}

// Exportar modulos commonJS
module.exports = {
    listarAutores,
    mostrarInfoAutor,
    createAuthor,
    actualizarAuthor,
    deleteAutor
}