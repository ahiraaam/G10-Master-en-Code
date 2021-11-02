//Importar react al crear un componete

import React from "react";
import './Counter.css'

// Declaramos nuestra clase que sera el nombre del componente
// utilizar PascalCase para nombrarlas clases (primera letra mayuscula)
// Todos nuestros componentes deben heredar de React.Component
export default class Counter extends React.Component{ 
    constructor(props)
    {
        super(props); // super: manda llamar el constructor de la clase padre
        
        //Los props solo son de lectura, son datos
        //props.initCountn = 100;

        // son datos, pero estos si se pueden modificar
        this.state = {
            count: props.initCount // initCount se recibe por parametro y es valor inicial del contador
        }

        //this.state.count = 5; INCORRECTO
        // se usa el metodo setState
        // el state se va a encargar de modificar el DOM
    }

    // todos los componentes deben tener un metodo RENDER
    render(){
        //debemos retornar codigo JSX
        return(
            <div className="counter-main">
                <h5>{this.state.count}</h5>
                <div className="counter-buttons">
                    <button onClick={ ()=>{ this.setState({count:this.state.count + 1}) } }>Agregar</button>
                    <button onClick={ ()=>{ this.setState({count:this.state.count - 1}) } } >Disminuir</button>
                </div>
            </div>
        );
    }

}