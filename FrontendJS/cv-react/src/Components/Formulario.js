import React  from "react";
import './Formulario.css'

export default class Formulario extends React.Component
{
    constructor(props){
        super(props);

        this.state = 
        {
            valorFormulario: ""
        }

        console.log(this.state.valorFormulario);
    }
    render()
    {
        return(
            <div>
                <input type="text" onKeyUp={ async (e)=>{
                    console.log(e);
                    console.log("estado actual",this.state.valorFormulario); 
                    await this.setState({valorFormulario:e.target.value}); 
                    console.log("nuevo estado",this.state.valorFormulario); 
                    } } ></input>
                <span>{this.state.valorFormulario} </span>
                <h1>Hola</h1>
            </div>
        );
    }
}