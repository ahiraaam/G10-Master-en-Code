// Ejemplo 1

var index =0;
var valores = [];

while( index < 10 ){
    
    var valueGen = Math.floor(Math.random()*100);
    valores.push(valueGen);

    index++;
}

console.log(valores);
var contador = 0;

do {
    contador++;
    console.log('Conteo:' + contador);
} while (contador < 10);

// alternativo
var contador = 0;

while(contador < 10){
    contador++;
    console.log('Conteo:' + contador);
}


// Ejercicio 3

var arreglo = [];
var entrada ;

do{
    entrada = parseInt(prompt("ingresa un numero"));
    if( typeof(entrada) == "number" )
    {
        arreglo.push(entrada);
    }
} while(entrada != 0)

console.log( "Los numeros ingresados son", arreglo);

// Crea un programa que solicite al 
//usuario letras o palabras, si es así guardar 
//el resultado. Para terminar de capturar 
//el usuario no debe escribir valor alguno. 
//Al terminar de capturar, mostrar en pantalla 
//la concatenación de todas las palabras 
//capturadas.

var arreglo = [];

do{
    var userInput = prompt("Ingresa una letra o palabra");
    arreglo.push(userInput);

}while( userInput != "" )

var index = 0;
var stringFinal = "";

while( index < arreglo.length )
{
    stringFinal = stringFinal + arreglo[index];
    index++;
    //stringFinal += arreglo[index];
}

document.write(stringFinal);

//Crea un programa que solicite al usuario un día de la 
//semana (ej: lunes, jueves, domingo, etc). 
//El programa mostrará un mensaje personalizado para cada día de la semana 
//por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. 
//En caso de que el día introducido sea domingo mostrar al usuario 
//el mensaje “Ve a descansar” y terminar la captura de información.

var userInput = "";
var veces = 0;
do{
    userInput = prompt("Ingresa un dia de la semana").toLowerCase();
    var mensaje = "";

    if( userInput == "lunes" ){
        mensaje = "EL DIA DE HOY ES LUNES ANIMO";
        veces++;
    }else if( userInput == "martes" )
    {
        mensaje = "MARTES.. NIMODO";
    }else if ( userInput == "miercoles" )
    {
        mensaje = "OMBLIGO DE SEMANA";
    }else if ( userInput == "jueves" )
    {
        mensaje = "CASI VIERNES...";
    }else if ( userInput == "viernes" )
    {
        mensaje = "YEIIII VIERNES!!!";
    }else if ( userInput == "sabado" )
    {
        mensaje = "SABADO SIN FIESTA.....";
    }else if ( userInput == "domingo" )
    {
        mensaje = "Ve a descansar";
    }else{
        mensaje = "opcion invalida!!";
    }
    

    alert(mensaje);
}while( userInput != "domingo" );

// Fibonacci

var a = 0;
var b = 1;
var c = 0;

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…

var limite = parseInt( prompt("Ingresa el numero limite") );

for (var index = 3; index < limite; index++) {

    if(index == 0) // 1
    {
        console.log(a);
        console.log(b);
    }
    c = a+b; // 3

    a = b; // 1
    b = c; // 2

    if ( c < limite )
        console.log(c);
}