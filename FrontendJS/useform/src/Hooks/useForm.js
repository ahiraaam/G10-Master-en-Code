// REGLAS PARA CREAR UN HOOK
// 1. Siempre se deben llamar empezando con use, ejemplo: useLoQueSea
// 2. Siempre son funciones --> REACT FUNCIONAL

import React, { useState } from "react";

export default function useForm(sendData, datos) {
  const [inputs, setInputs] = useState(datos); //vamos a guardar los valores del formulario
  console.log(inputs);
  const handleInput = (event) => {
    const { name, value } = event.target;
    console.log("Name es: " + name, "El valor del input " + value);
    setInputs({ ...inputs, [name]: value });
  };

  return {
    // El hook no regresa JSX
    inputs,
    handleInput,
  };
}
