import React, { useState, useEffect } from "react";
import ListaContactos from "./ListaContactos";

export default function HomeLista() {
  const [contactos, setContactos] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setContactos([
        { nombre: "Adrian", telefono: 5589376479 },
        { nombre: "Jhon", telefono: 7563839234 },
        { nombre: "Belem", telefono: 6375738290 },
      ]);
    }, 3000);
  }, []);
  return (
    <>
      {contactos.length === 0 ? (
        <h2>Cargando....</h2>
      ) : (
        <ListaContactos lista={contactos} />
      )}
    </>
  );
}
