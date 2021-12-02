import React from "react";
import { useUserContext } from "../../context/UserContext";

export default function DetailsUser() {
  const context = useUserContext();
  return (
    <div>
      <h3>Componente DetailsUser</h3>
      <p>{context.usuarioActual.name}</p>
      <p>{context.usuarioActual.username}</p>
      <p>{context.usuarioActual.email}</p>
    </div>
  );
}
