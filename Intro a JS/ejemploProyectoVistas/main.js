let btnLogin = document.getElementById("btn-login");
let seccionLogin = document.getElementById("seccionLogin");
let seccionPrincipal = document.getElementById("seccionPrincipal");
//Ocultando sección principal
seccionPrincipal.hidden = true;
var usuarios = [
  {
    name: "Carlos",
    usuario: "cburguenog@gmail.com",
    pass: "contrasena123",
  },
  {
    name: "jorge",
    usuario: "jorge.mendoza@gmail.com",
    pass: "jorge123",
  },
];

function login(correo, password) {
  let flagAlert = true;
  let alert = document.getElementById("liveAlert");

  for (let i = 0; i < usuarios.length; i++) {
    let tmpUsuario = usuarios[i];
    //Esta es la validacio para ver si si existe el usuario
    if (
      correo.toLowerCase() === tmpUsuario.usuario.toLowerCase() &&
      password === tmpUsuario.pass
    ) {
      //flagAlert = false;
      //Oculto la sección de login (el formulario)
      seccionLogin.hidden = true;
      //Muestro la sección principal (los botones)
      seccionPrincipal.hidden = false;
      break;
    }
  }

  if (flagAlert == true) {
    alert.classList.add("alert-danger");
    alert.textContent = "Upps!! Revisa usuario y contraseña!!";
  }
}

//Detecto el click en el botón
btnLogin.addEventListener("click", function () {
  //Obtengo valores de usuario y contraseña
  let usuario = document.getElementById("txt-user").value;
  let password = document.getElementById("txt-pass").value;
  console.log("Click en el botón");
  //Se ejecuta la función login
  //Adentro de la función login es donde oculto/muestro secciones
  login(usuario, password);
});
