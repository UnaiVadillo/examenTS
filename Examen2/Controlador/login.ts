/// <reference path="../Modelo/Mensaje.js" />
/// <reference path="../Modelo/Usuario.js" />
/// <reference path="../node_modules/jquery/dist/jquery.min.js" />

$(document).ready(function (){
    try {
        $("#login").click(login);
    }catch (e){
        alert(e);
    }

});

function login(){
    try {
        // @ts-ignore
        let datosUsu: Array<Usuario> = JSON.parse(localStorage.getItem("listaUsuarios"));
        let usuario: string = $("#usuario").val().toString();
        let password: string = $("#password").val().toString();
        // @ts-ignore
        let usu1: Usuario = datosUsu.find(u => u.usuario == usuario);
        if (usu1.usuario == usuario && usu1.password == password) {
            localStorage.setItem("usuLog", JSON.stringify(usu1.usuario));
            alert("Usuario " + usu1.usuario + " logeado");
            window.location.href = "mensajes.html";
        } else {
            throw "Usuario y contraseña incorrecto"
        }
    }catch (e){
        alert(e);
    }
}