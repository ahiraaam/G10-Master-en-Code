// Importar los metodos que realizamos en el archivos de crudAutores
const authorsCrud = require('./crudAutores');


//MOSTRAR AUTORES

//authorsCrud.listarAutores();

//Mostrar info autor
//authorsCrud.mostrarInfoAutor(14554);

// CREAR un autor


const jsonInfoAutor = {
    name:'Arnoldd',
    last_name:'Carbonell'
};

//authorsCrud.createAuthor(jsonInfoAutor);

//authorsCrud.actualizarAuthor(14558,jsonInfoAutor);


authorsCrud.deleteAutor(14558);
