import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
//Context nos ayuda a manejar los estados globales de React
//para COMPARTIR la misma información entre distintos
//componentes sin importar su nivel y jerarquía

// Paso 1: Crear el contexto
const UserContext = React.createContext();

// Paso 2: Crear un proveedor (Provider) del contexto (estado global)
// Se encarga de proveer la data a nuestro contexto
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
  //Especifico que cosas voy a "exponer", es decir que cosas se podrán usar fuera
  const value = {
    listaUsuarios,
    usuarioActual,
    setUsuarioActual,
  };

  //Regresa un componente NombreContexto.Provider
  return <UserContext.Provider value={value} {...props} />;
}

// Paso 3: Crear el consumidor de nuestro contexto
// Es la forma para acceder a los datos
const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};

// Paso 4: Exportar el proveedor y el consumidor
// para que se puedan utilizar en los demás componentes

export { UserProvider, useUserContext };

// USO DEL CONTEXT

// Paso 5: Es ir a un componente superior (en este caso HOME)
// y "envolver" a los componentes que harán uso del contexto

// Paso 6: Consumir el contexto (en este caso en los componente DetailsUser y ListUser)
// useUsercontext
