
import { Alumno } from "./alumno.js"
import { Profesor } from "./profesor.js";

const carlos = new Alumno({nombre:'carlos',apellido:'Burgueño',edad:29,
direccion:"Callesita",promedio:"10",asistencias:0,usuario:"cburguenog",nacionalidad:"Peruana"});

const ahiram = new Profesor({
    nombre:"ahiram",
    direccion:"otra callesita",
    salario:"100,000",
    usuario:"ahiram123",
    materias:["Computer science", "Intro a JS", "Intro HTML"]
});

console.log(carlos);

carlos.login();
carlos.obtenerPromedio();

ahiram.login();
console.log(ahiram);