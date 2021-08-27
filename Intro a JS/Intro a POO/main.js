// Clase Persona

class Persona {
  constructor(
    nombre,
    apellido,
    edad,
    sexo,
    peso,
    nacionalidad = "Peruana",
    esVegano
  ) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._sexo = sexo;
    this._peso = peso;
    this._nacionalidad = nacionalidad;
    this._esVegano = esVegano;
  }

  comer() {
    if (this._esVegano == true) {
      return "Esta persona no puede comer alimentos de origen animal";
    } else {
      return "Esta persona puede comer todo";
    }
  }

  tomarAlcohol() {
    if (this._edad >= 18) {
      return "Puedes tomar alcohol";
    } else {
      return "No puedes tomar";
    }
  }
}

const persona1 = new Persona(
  "Luis",
  "Juarez",
  29,
  "masculino",
  60,
  "mexicano",
  false
);
const persona2 = new Persona(
  "Juliana",
  "Lopez",
  23,
  "femenino",
  60,
  "peruana",
  true
);

const persona3 = new Persona((_apellido = "Cruz"));

//console.log(persona3);

console.log(persona1);
console.log(persona2);
console.log(persona1._nombre, persona1.comer());
console.log(persona2._nombre, persona2.comer());
console.log(persona1._nombre, persona1.tomarAlcohol());
console.log(persona2._nombre, persona2.tomarAlcohol());
