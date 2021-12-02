import React, { useState, useEffect } from "react";
import axios from "axios";
export default function ListUsers() {
  return (
    <div>
      {listaUsuarios.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
}
