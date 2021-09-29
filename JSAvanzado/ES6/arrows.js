// Arrows 

// JS Vanilla

function suma(num1,num2)
{
    return num1 + num2;
}

console.log(suma(10,50));

//ES6

const sumar = (num1,num2)=>{
    console.log(num1);
    console.log(num2);
    let c = num1 + num2;
    return c;
};

console.log(sumar(10,50));

const ejSuma = (a,b)=> a+b; // Solo ejecuta una instruccion

const saludar = nombre => "Hola " + nombre; // cuando solo recibe un parametro se pueden evitar los arentesis

console.log(ejSuma(10,50));
console.log(saludar("Carlos"));

const alumnos = [ 'Adrian', 'Gerardo', 'Jhon', 'Merly','Ahiram','Fiorella', 'Brenda' ];

alumnos.forEach(item => console.log(item)); // la flecha => reemplaza la palabra function y el nombre

// function imprimir(){ console.log }


// sintaxis   ( ) => { }

/*
1- Los parantesis son para los parametros // si solo es un parametro pueden omitirse los pàrentesis // si no lleva parametros se colocan vacios
2- La flecha va obligatoriamente (  => ) 
3- si solo ejecutamos una instruccion se pueden omitir las llaves, si son 2 o mas necesitan colocar las llaves ({})
*/


