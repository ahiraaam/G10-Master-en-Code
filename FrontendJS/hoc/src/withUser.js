import React,{useState,useEffect} from 'react'
import axios from "axios";

//Contiene toda la logica del componente

const WithUser = (ComponentUser) => {
    
    const NewComponent = ( { userId, ...props } ) => {
        const [ user,setUser ] = useState({});

        useEffect( ()=>{
            axios.get( `https://jsonplaceholder.typicode.com/users/${userId}` )
            .then( response => setUser(response.data) )
        },[])

        return <ComponentUser {...props} user={ user } />
    }

    return NewComponent;
}

export default WithUser;

