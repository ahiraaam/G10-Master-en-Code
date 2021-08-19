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
    var continuar = true;

    do{
        var operacion = prompt( " ¿Que operacion desea realizar (+,-,*,/)?" ); // a
        var resultado = 0;

        var a = parseInt(prompt("Ingresa el primero numero"));
        var b = parseInt(prompt("Ingresa el segundo numero"));

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
