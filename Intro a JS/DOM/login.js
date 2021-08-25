var usuarios = [
    {
        name: "Carlos",
        usuario:"cburguenog@gmail.com",
        pass:"contrasena123"
    },
    {
        name:"jorge",
        usuario:"jorge.mendoza@gmail.com",
        pass:"jorge123"
    }
];

function login( correo, password )
{
    let flagAlert = true;
    let alert = document.getElementById("liveAlert");

    for( let i=0; i < usuarios.length;i++  )
    {
        let tmpUsuario = usuarios[i];

        if( (correo.toLowerCase() === tmpUsuario.usuario.toLowerCase()) 
                && 
            ( password === tmpUsuario.pass  )  )
        {
            alert.classList.add("alert-primary");
            alert.innerText="Login Exitoso!!!";
            flagAlert = false;
            break;
        }
    }

    if( flagAlert == true )
    {
        
        alert.classList.add("alert-danger");
        alert.textContent = "Upps!! Revisa usuario y contraseña!!"
    }
}


let  btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click",function()
{
    let usuario = document.getElementById("txt-user").value;
    let password = document.getElementById("txt-pass").value;
    console.log(usuario,password);
    
    login(usuario,password);
});