/**  ARRAYS - MAP / FILTER */

const myArray = [1,5,9,15,20];

// Vanilla

const myArrayCuadrado = [];

for (let i = 0; i < myArray.length; i++) { // i = 0; i = 1; i= 2;
    const numero = myArray[i]; // numero = 1; numero = 5; numero = 9;
    myArrayCuadrado.push( numero**2 ); // push alnuevo array
}

console.log(myArray);
console.log(myArrayCuadrado);

/**  MAP */

// integra un for dentro de su funcionamiento, genera un ciclo por cada uno de los elementos del arreglo
// por si mismo determina el numero de iteraciones
// por cada iteracion genera 2 variables
// * item = el elemento del arreglo de acuerdo a su iteracion 
// * index = posicion del elemento en el arreglo;

// en la iteracion 0  = item = 1; index = 0;
// en la iteracion 1 = item = 5; index = 1;
// en la iteracion 2 = item = 9; index = 2;
// el index es opcional

const myArrayCuadrado2 = myArray.map( (item,index) => {
    //index nos ayuda a saber la posicion en el arreglo
    // map regresa un nuevo arreglo, no modifica el arreglo original
    // siempre debe regresar un valor
    console.log(index + "->" + item);
    return item**2;
} )

console.log("CON MAP");
console.log(myArray);
console.log(myArrayCuadrado2);


/** FILTER */
// devuelve un nuevo arreglo con los elementos que cumplan alguna condicion

// el index es opcional
const multiplos = myArray.filter( (numero,index) =>{
    const data = (( numero % 2 ) === 0) ? numero : null; // valida que sea numero par
    return data; // siempre debemos retornar un valor
});

console.log("FILTER");
console.log(myArray);
console.log(multiplos);

/* FIND  */
// Retorna el valor si lo encuentra, si no lo encuentra retornar undefined

const numeroEncontrado = myArray.find( (numero)=>{
    // debo retornar el resultado de una condicion : boolean true/false
    return numero === 20
});

console.log("Encontre el numero :",numeroEncontrado);


const dataAlumnos = [
    {
        name:"Carlos",
        edad:29,
        posicion:"Sensei"
    },
    {
        name:"Ahiram",
        edad:15,
        posicion:"Sensei"
    },
    {
        name:"Oliver",
        edad:27,
        posicion:"Alumno"
    },
    {
        name:"Jorge",
        edad:32,
        posicion:"Alumno"
    }
]

//Obtener un arreglo con las personas de mas de 20 años
    const personas20 = dataAlumnos.filter((alumno)=>{
        //const edad = alumno.edad
        const { edad } = alumno;
        return edad > 20;
        // return alumno.edad > 20;
    });

    console.log(personas20);

    // ["Carlos","Ahiram","Oliver"];
// Obtener un arreglo que solo tenga los nombres
    const nombreAlumnos = dataAlumnos.map( (alumno)=> alumno.name );
    //const nombreAlumnos = dataAlumnos.map( (alumno)=> { name:alumno.name, edad:alumno.edad } );
    console.log(nombreAlumnos);


const myFinalArray = dataAlumnos
                            .filter( (alumno) => alumno.edad > 20   )
                            .map( (alumno) => alumno.name )

                            
console.log(myFinalArray);


    
