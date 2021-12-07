import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
export default function Login() {
  const login = (datos) => {
    axios
      .post("https://ecomerce-master.herokuapp.com/api/v1/login", datos)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        console.log(response.data);
      });
  };

  //Al useform le enviamos la función que se va a ejecutar en el submit
  //En este caso es la función que hará la petición para hacer login
  const { inputs, handleInput, handleSubmit } = useForm(login, {});
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Ingresa tu email"
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
            placeholder="Ingresa tu contraseña"
            onChange={handleInput}
            value={inputs.password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
