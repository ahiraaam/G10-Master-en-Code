import React,{ useState,useEffect, useRef } from 'react'

export default function Counter() {

    const [ count, setCount ] = useState(0);
    const botonContadorRef = useRef();
    const cuentaRenderizado = useRef(0);
    const nombre = useRef('Carlos');

    useEffect( ()=> {
        console.log(botonContadorRef.current.innerText = 'Hola!');
        if( cuentaRenderizado.current === 0 )
        {
            cuentaRenderizado.current = cuentaRenderizado.current + 1;
            return;
        }
        console.log( `El valor inicial del contador es ${count}` );
        console.log(cuentaRenderizado.current);
    },[ count ] )

    const changeName = () =>{
        nombre.current = 'Ahiram';
        console.log(`TU NUEVO NOMBRE ES ${ nombre.current }`);
    }

    return (
        <div>
            <h1> Contador : { count } </h1>
            <button ref={ botonContadorRef } onClick={ ()=> { setCount( count+1 ) } } > Sumar 1 </button>

            <h1> Nombre: { nombre.current } </h1>
            <button onClick={ changeName } > Cambiar nombre </button>
        </div>
    )
}
