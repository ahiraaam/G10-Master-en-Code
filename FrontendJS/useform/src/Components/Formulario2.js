import React, { useState } from "react";
import useForm from "../Hooks/useForm";

export default function Formulario2() {
  const [datos, setDatos] = useState({
    pais: "Mexico",
    color: "azul",
  });
  const saludar = () => {
    console.log("Mañana hay kahoot");
  };
  const { inputs, handleInput, handleSubmit } = useForm(saludar, datos);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for="pais">Pais</label>
        <input
          id="pais"
          type="text"
          name="pais"
          placeholder="Pon tu país"
          onChange={handleInput}
          value={inputs.nombre}
        />
      </div>
      <div>
        <label for="color">Color Favorito</label>
        <input
          id="color"
          type="text"
          name="color"
          placeholder="Pon tu color favorito"
          onChange={handleInput}
          value={inputs.nombre}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
