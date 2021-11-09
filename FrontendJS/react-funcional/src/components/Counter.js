import React, { useState, useEffect } from "react";

function Counter({ edad, apellido }) {
  /*Aqui va la lógica*/
  // useState nos va a devolver un arreglo con 2 elementos
  // Posición 0 : El valor del estado (variable)
  // Posición 1: La función para actualizar mi estado
  // useState() recibe el valor valor inicial de la variable

  const [contador, setContador] = useState(0);
  const [nombre] = useState("Ahiram");

  //Se ejecuta al inicio y cada vez que se actualiza el estado, props o contexto
  useEffect(() => {
    console.log("Hola desde UseEffect, siempre se ejecuta");
  });
  //Solo se va a ejecutar al inicio
  useEffect(() => {
    console.log("Hola, solo inicio");
  }, []);
  //Se va a ejecutar al inicio y cuando cambie la variable que está escuchando
  useEffect(() => {
    console.log("Hola, me ejecuto cuando cambia contador");
  }, [contador]);
  //Se va a ejecutar al inicio y cuando cambie la variable que está escuchando
  useEffect(() => {
    console.log("Hola, me ejecuto cuando cambia nombre");
  }, [nombre]);
  //Aqui es donde va lo que se renderiza
  return (
    <>
      <h1>Yo soy el componente Counter</h1>
      <h2>
        Hola: {nombre} {apellido} . Tienes {edad} años
      </h2>
      <p>{contador}</p>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Sumar 1
      </button>
      <button onClick={() => setContador(contador - 1)}> Restar 1</button>
    </>
  );
}

export default Counter;
