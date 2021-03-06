import React from "react";
import ListUsers from "../../components/ListUsers";
import DetailsUser from "../../components/DetailsUser";
import { UserProvider } from "../../context/UserContext";
import "./home.css";
export default function Home() {
  return (
    <UserProvider>
      <div className="home-container">
        <div className="home-container__izquierdo">
          <h2>Lista de Usuarios</h2>
          <ListUsers />
        </div>
        <div className="home-container__derecho">
          <h2>Detalle de Usuario</h2>
          <DetailsUser />
        </div>
      </div>
    </UserProvider>
  );
}
