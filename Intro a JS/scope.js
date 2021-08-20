//EJERCICIO DE SCOPE
var variableGeneral = "variableGeneral"
var nombre = "Carlos"

function Casa(){
    var variableDeCasa = "variableDeCasa"
    var nombre = "Arnold"
    console.log("Desde función Casa", nombre);
    console.log("Desde funcion Casa", variableGeneral);
    console.log("Desde funcion Casa",variableDeCasa);
    function CuartoPersonal(){
        var variableHija = "variableHija"
        console.log("Desde funcion CuartoPersonal",variableHija);
        console.log("Desde funcion CuartoPersonal",variableDeCasa);
    }
    CuartoPersonal()
    console.log("Desde funcion Casa", variableHija); //Marca error porque no encuentra la variable
}
Casa()

console.log("Desde funcion archivo general",nombre);
console.log("Desde funcion archivo general",variableGeneral);
console.log("Desde funcion archivo general",variableDeCasa); //Marca error
