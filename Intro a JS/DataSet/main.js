//Obtener datos de data-set del botón 1
const boton1 = document.getElementById("boton1")
boton1.addEventListener("click", function(){
    let nombre1 =  boton1.dataset.name //Con esta linea obtendo el dato de data-nombre
    let edad1 = boton1.dataset.edad//Con esta linea obtendo el dato de data-edad
    console.log("Datos boton 1",nombre1,edad1)
})

//Obtener datos de data-set del botón 2
const boton2 = document.getElementById("boton2")
boton2.addEventListener("click", function(){
    let apellido =  boton2.dataset.apellido //Con esta linea obtendo el dato de data-apellido
    console.log("Datos boton 2",apellido)
})

// EJEMPLO DE TERNARIO

let numero = 9

// El ternario es como poner un if de forma mas "simple" y reducida
// En este ejemplo se evalúa la condición del número 
// Si es >= a 10 entonces se imprime lo que va después del "?"
// Si es menor entonces se imprime lo que va después de los  " : "

numero >= 10 ? console.log("El num es mayor/igual a 10") : console.log("El num es menor a 10")

//NOTA: Solo se puede ejecutar una sola cosa 

// Sintaxis:  
// Condición ?  Lo que se ejecuta SI SE CUMPLE LA CONDICION : Lo que se ejecuta SI NO se cumple la condición