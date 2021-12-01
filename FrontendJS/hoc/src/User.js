import React from 'react'

export default function User( props ) {

    // Aqui se muestra el render de la informacion
    console.log(props);
    return (
        <div>
            <h2>
                {props.user.name} <br/>
                {props.user.username} <br/>
                {props.user.phone} <br/>
                {props.user.website} <br/>
            </h2>
            <span>
                {props.user.email}
            </span>
        </div>
    )
}
