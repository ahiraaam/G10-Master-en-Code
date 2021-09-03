function greenScreen() {
  let bodyTag = document.getElementById("cuerpo");
  bodyTag.style.backgroundColor = "green";
  bodyTag.innerHTML = `<h1>Hola mundo</h1>`;
}

function purpleScreen() {
  let bodyTag = document.getElementById("cuerpo");
  bodyTag.style.backgroundColor = "purple";
}

function pinkScreen() {
  let bodyTag = document.getElementById("cuerpo");
  bodyTag.style.backgroundColor = "pink";
}

function whiteScreen() {
  let bodyTag = document.getElementById("cuerpo");
  bodyTag.style.backgroundColor = "white";
}

function sumar() {
  const a = parseInt(document.getElementById("num1").value);
  const b = parseInt(document.getElementById("num2").value);

  const resultado = a + b;
  console.log(resultado);

  document.getElementById("resultado").value = resultado;
}
