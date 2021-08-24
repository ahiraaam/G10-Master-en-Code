function Suma(num1,num2){
    return num1 + num2;
}

function Resta(num1,num2)
{
    return num1 - num2;
}

function Multiplicar(num1,num2)
{
    return num1 * num2;
}

function Division( num1,num2 )
{
    return num1 / num2;
}


function Calculadora()
{
    var continuar = true; // flags -> banderas
    var resultado = 0;

    do{
        var operacion = prompt( " ¿Que operacion desea realizar (+,-,*,/)?" ); // ?
        
        
        var a = parseInt(prompt("Ingresa el primero numero")); //10
        var b = parseInt(prompt("Ingresa el segundo numero")); // 50

        if( operacion == "+")
        {
            resultado = Suma(a,b);
        }else if ( operacion == "-" )
        {
            resultado = Resta(a,b);
        }else if ( operacion == "*" )
        {
            resultado = Multiplicar(a,b);
        }else if( operacion == "/"){
            resultado = Division(a,b);
        }else{
            console.log("opcion invalida");
            continuar = false;
        }

        console.log(`El resultado de la operacion (${operacion}) es : ${resultado}`);

    }while(continuar == true);    
}

/// poner un numero
var num = parseInt(prompt("Ingresa el primero numero")); 
// solcitar el operador
var operacion = prompt( " ¿Que operacion desea realizar (+,-,*,/)?" ); 
// segundo numero
var num2 = parseInt(prompt("Ingresa el primero numero"));

// 100
var resultado = num1 + num2;

var num3 = parseInt(prompt("Ingresa el primero numero"));
var resultado2 = resultado / 
//precionar igual // boton

