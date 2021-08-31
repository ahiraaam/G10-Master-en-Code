import { Persona } from "./Persona.js";

export class Profesor extends Persona{

    constructor({
        nombre,
        apellido,
        edad,
        direccion,
        materias,
        usuario,
        contrasena,
        email,
        salario,
        nacionalidad
    }){
        super({nombre,apellido,edad,direccion,usuario,contrasena,email});
        this.salario    = salario;
        this.materias = materias;

    }

}