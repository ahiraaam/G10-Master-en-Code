/* 5 - Escriba un programa JavaScript para cambiar el uso de mayúsculas en todas 
las letras de una cadena determinada. Ej ---> changeMayus("ComoEstas")  */

let mySring = "ComoEstas";
letrasMisculas = []

for (let index = 0; index < mySring.length; index++) {
    if( mySring.charAt(index) )
    {

    }
}

// h => h ? h === h true <-- envio letra minuscula
// O => o ? O === o false <--- envio mayuscula
const isLowercase = e => e.toLowerCase() === e 

const transformar = cadena =>{
  const arr= cadena.split('')
  const val = arr.map(e=> isLowercase(e)? e.toUpperCase() : e.toLowerCase())
  return val.join('')  
}
console.log(transformar("hOlaMundO"))