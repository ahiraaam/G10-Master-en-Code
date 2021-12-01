import React,{useState,useEffect} from 'react'
import axios from "axios";

//Contiene toda la logica del componente

const WithUser = (ComponentUser) => {
    
    const NewComponent = props => {
        const [ user,setUser ] = useState({});

        useEffect( ()=>{
            axios.get( `https://jsonplaceholder.typicode.com/users/1` )
            .then( response => setUser(response.data) )
        },[])

        return <ComponentUser {...props} user={ user } />
    }

    return NewComponent;
}

export default WithUser;

