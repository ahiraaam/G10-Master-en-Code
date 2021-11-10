import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Clima() {
  const [datosApi, setDatosApi] = useState({}); // Se guarda la respuesta de la API
  const apiKey = process.env.REACT_APP_WEATHER_KEY;
  //console.log(apiKey);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=lima&appid=${apiKey}&units=metric`;

  //Se ejecuta solo en el primer render
  useEffect(() => {
    axios.get(url).then((res) => setDatosApi(res.data));
  }, []);
  return (
    <div>
      <h1>{datosApi.name}</h1>
      {datosApi.main ? <h2>{datosApi.main.temp}</h2> : <h2>Cargando...</h2>}
    </div>
  );
}
