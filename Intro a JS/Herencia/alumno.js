import { Persona } from "./Persona.js";

export class Alumno extends Persona {

    constructor({
        nombre,
        apellido,
        edad,
        direccion,
        usuario,
        contrasena,
        email,
        promedio,
        asistencias,
        nacionalidad
    }){
        super({nombre,apellido,direccion,usuario,contrasena,email,edad,nacionalidad});
        this.promedio    = promedio;
        this.asistencias = asistencias;
    }

    obtenerPromedio(){
        console.log(`El alumno ${this.usuario} tiene el promedio de ${this.promedio}`);
    }
}