export class Persona {

    constructor({
        nombre,
        apellido,
        edad,
        direccion,
        usuario,
        contrasena,
        email,
        nacionalidad= ""
    }){
        this.nombre      = nombre;
        this.apellido    = apellido;
        this.edad        = edad;
        this.direccion   = direccion;
        this.usuario     = usuario;
        this.contrasena  = contrasena;
        this.email       = email;
        this.nacionalidad = nacionalidad;
    }

    login(){
        console.log(`El usuario ${this.usuario} inicio sesion`);
    }

}