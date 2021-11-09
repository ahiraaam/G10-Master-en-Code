const animal = {
  nombre: "Firulais",
  edad: 5,
  apellido: "Blanco",
};
const persona = {
  nombre: "Ahiram",
  edad: 5,
  apellido: "Cruz",
};

function nombreAnimal(objeto) {
  console.log(objeto.nombre);
}

nombreAnimal(animal);
nombreAnimal(persona);

function nombreDestructuracion({ nombre }) {
  console.log(nombre);
}

nombreDestructuracion(animal);
