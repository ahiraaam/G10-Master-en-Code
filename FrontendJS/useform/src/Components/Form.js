import React, { useState, useEffect } from "react";
import useForm from "../Hooks/useForm";

export default function Form() {
  /* ESTO NO SE HACE, ES MALA PRACTICA
  const [nombre, setNombre] = useState("");
  const [nombre, setNombre] = useState("");
  const [nombre, setNombre] = useState("");
  */
  const [datos, setDatos] = useState({});

  useEffect(() => {
    setTimeout(() => {
      //Simular llamada a API
      const info = {
        nombre: "Martin",
        apellidos: "HP",
        edad: 28,
        genero: "Masculino",
        email: "martinhp@gmail.com",
        password: "123456",
      };
      setDatos(info);
    }, 1000);
  }, []); // Solo se va a ejecutar cuando se "monta" el componente
  console.log(datos);

  //Funcion que emula enviar datos a la API
  const sendData = (datos) => {
    //Toda la lógica de hacer un post
    console.log("Datos enviados" + datos);
  };

  const { inputs, handleInput, handleSubmit } = useForm(sendData, datos); //custom hook

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Pon tu nombre"
            onChange={handleInput}
            value={inputs.nombre}
          />
        </div>
        <div>
          <label>Apellidos</label>
          <input
            id="apellidos"
            type="text"
            name="apellidos"
            placeholder="Pon tu apellido"
            onChange={handleInput}
            value={inputs.apellidos}
          />
        </div>
        <div>
          <label for="edad">Edad</label>
          <input
            id="edad"
            type="number"
            max="10"
            name="edad"
            onChange={handleInput}
            value={inputs.edad}
          />
        </div>
        <div>
          <label for="genero">Género</label>
          <input
            id="genero"
            type="text"
            name="genero"
            onChange={handleInput}
            value={inputs.genero}
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={handleInput}
            value={inputs.email}
          />
        </div>
        <div>
          <label for="password">Contraseña</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleInput}
            value={inputs.password}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
