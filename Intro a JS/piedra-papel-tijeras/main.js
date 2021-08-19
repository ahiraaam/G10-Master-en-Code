/* computadora selecciona una opcion aleatoria */
var valSelect = Math.floor(Math.random() * 3);
var opcionSeleccionada;

//var var1 = 0;
//var var2 = "0";

//if(var1 == var2) // true;
//if(var1 === var2) // false;

if (valSelect === 0)
{
    opcionSeleccionada = "piedra";
}else if (valSelect === 1)
{
    opcionSeleccionada = "papel";
}else
{
    opcionSeleccionada = "tijera";
}


console.log("la opcion seleccionada es " + opcionSeleccionada );

/* seleccionar opcion */

var userOpcion = prompt("Seleciona piedra, papel o tijera:").toLowerCase();

/*
if( opcionSeleccionada == userOpcion ){
    document.write("Resultado: Empate");
}else if (userOpcion === "tijera" && opcionSeleccionada == "papel")
{
    document.write("Resultado: Gana usuario");
}else if (userOpcion === "tijera" && opcionSeleccionada == "piedra")
{
    document.write("Resultado: Gana computadora");
}else if (userOpcion === "papel" && opcionSeleccionada == "tijera")
{
    document.write("Resultado: Gana computadora");
}else if (userOpcion === "papel" && opcionSeleccionada == "piedra")
{
    document.write("Resultado: Gana usuario");
}else if (userOpcion === "piedra" && opcionSeleccionada == "tijera")
{
    document.write("Resultado: Gana usuario");
}else if (userOpcion === "piedra" && opcionSeleccionada == "papel")
{
    document.write("Resultado: Gana computadora");
}
*/

if( opcionSeleccionada == userOpcion ){
    document.write("Resultado: Empate");
}else if (userOpcion === "tijera" && opcionSeleccionada == "papel")
{
    document.write("Resultado: Gana usuario");
}else if (userOpcion === "papel" && opcionSeleccionada == "piedra")
{
    document.write("Resultado: Gana usuario");
}else if (userOpcion === "piedra" && opcionSeleccionada == "tijera")
{
    document.write("Resultado: Gana usuario");
}else{
    document.write("Resultado: Gana computadora");
}


//if (varValor==="piedra" && opcionPersona==="piedra"){}
