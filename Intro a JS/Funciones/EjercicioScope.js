//Escriba una función donde solicite un número al usuario y me calcule su factorial.

function calcularFactorial(num)
{
    var resultado = 1;
    for (let index = 1; index <= num; index++) {
        resultado = resultado*index;
    }
    console.log(`El factorial de ${num} es = ${resultado}`);
}

var userInput = parseInt( prompt("Ingresa un numero") );

if( !isNaN(userInput) )
{
    calcularFactorial(userInput);
}else{
    console.log("Ingresa un numero valido");
}