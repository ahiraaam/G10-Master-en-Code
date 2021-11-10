import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Clima() {
  const [datosApi, setDatosApi] = useState({}); // Se guarda la respuesta de la API
  const [valorInput, setValorInput] = useState(""); // Se guarda el valor del input
  const [ciudad, setCiudad] = useState("Chicago"); // Se guarda la ciudad a buscar
  const apiKey = process.env.REACT_APP_WEATHER_KEY;
  //console.log(apiKey);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

  //Se ejecuta solo en el primer render
  //useEffect está escuchando cambios en la url
  useEffect(() => {
    axios.get(url).then((res) => setDatosApi(res.data));
  }, [url]);

  // Funcion para actualizar el estado del input
  const inputHandler = (event) => {
    console.log(event);
    setValorInput(event.target.value); //Actualizando el estado de valorInput
    //console.log(valorInput);
  };
  //Pongo el valor final de mi input en el estado "ciudad"
  //actualizará la URL por lo tanto se vuelve a ejecutar el useEffect
  const submitHandler = () => {
    setCiudad(valorInput);
  };
  return (
    <div>
      <h1>Clima</h1>
      <div className="div__datos">
        <input
          type="text"
          placeholder="Ingresa tu ciudad"
          onChange={inputHandler}
          value={valorInput}
        />
        <button onClick={submitHandler}>Buscar Clima</button>
      </div>
      <h2>{datosApi.name}</h2>
      {datosApi.main ? (
        <div>
          <img
            src={`http://openweathermap.org/img/w/${datosApi.weather[0].icon}.png`}
            alt={datosApi.weather[0].icon}
          ></img>
          <h4> La temperatura actual es {datosApi.main.temp}</h4>
          <p> Sensación térmica: {datosApi.main.feels_like}</p>
          <p> Temp mínima: {datosApi.main.temp_min}</p>
          <p> Temp máxima: {datosApi.main.temp_max}</p>
        </div>
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
}
