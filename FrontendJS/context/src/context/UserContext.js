import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
//Context nos ayuda a manejar los estados globales de React
//para COMPARTIR la misma información entre distintos
//componentes sin importar su nivel y jerarquía

// Paso 1: Crear el contexto
const UserContext = React.createContext();

// Paso 2: Crear un proveedor (Provider) del contexto (estado global)

function UserProvider(props) {
  const [listaUsuarios, setListaUsuarios] = useState([]); //lista de los usuarios de la API
  const [usuarioActual, setUsuarioActual] = useState({}); //usuario actual para mostrar los detalles

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setListaUsuarios(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const value = {
    listaUsuarios,
    usuarioActual,
  };
  return <UserContext.Provider value={value} {...props} />;
}
