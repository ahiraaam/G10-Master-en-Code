import './App.css';
import React,{ useEffect,useState } from "react";

import useForm from "./Hook/useForm";

function App() {

  /* Mala practica *
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [nombre, setNombre] = useState();
  */

  const [datos,setDatos] = useState({});

  useEffect( ()=>{
    setTimeout( ()=>{
      const miInfo = {
        nombre :"Carlos",
        Apellido :"Burgueño",
        edad :29,
        genero :"H",
        email:"sensei@devf.com",
        password:"123456"
      }

      setDatos(miInfo);
     },1000)
  },[])

  console.log("Este es el valor de la API",datos);

  const sendData = (data) => {
    console.log("Esta es mi data final ",data);
  }

  const { input,handleInputChange,handleSubmit } = useForm(sendData,datos);

  return (
    <div className="App">
      <form onSubmit={ handleSubmit } >
        <input
        type="text"
        name="nombre"
        placeholder="escribe tu nombre"
        onChange={ handleInputChange }
        value={ input.nombre }
        />

<input
        type="text"
        name="apellido"
        placeholder="escribe tu apellido"
        onChange={ handleInputChange }
        value={ input.apellido }
        />

<input
        type="password"
        name="password"
        placeholder="escribe tu password"
        onChange={ handleInputChange }
        value={ input.password }
        />

<input
        type="email"
        name="email"
        placeholder="escribe tu email"
        onChange={ handleInputChange }
        value={ input.email }
        />

        <select  
        name="genero"
        onChange={ handleInputChange }
        value={input.genero}
        >
          <option value="">Elige un genero</option>
          <option value="F">Femenino</option>
          <option value="M">Masculino</option>
        </select>
        
<input
        type="number"
        name="edad"
        placeholder="escribe tu edad"
        onChange={ handleInputChange }
        value={ input.edad }
        />

          <button type="submit" >Enviar!!</button>
      </form>
    </div>
  );
}

export default App;
