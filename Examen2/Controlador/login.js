/// <reference path="../Modelo/Mensaje.js" />
/// <reference path="../Modelo/Usuario.js" />
/// <reference path="../node_modules/jquery/dist/jquery.min.js" />
$(document).ready(function () {
    try {
        $("#login").click(login);
    }
    catch (e) {
        alert(e);
    }
});
function login() {
    try {
        // @ts-ignore
        var datosUsu = JSON.parse(localStorage.getItem("listaUsuarios"));
        var usuario_1 = $("#usuario").val().toString();
        var password = $("#password").val().toString();
        // @ts-ignore
        var usu1 = datosUsu.find(function (u) { return u.usuario == usuario_1; });
        if (usu1.usuario == usuario_1 && usu1.password == password) {
            localStorage.setItem("usuLog", JSON.stringify(usu1.usuario));
            alert("Usuario " + usu1.usuario + " logeado");
            window.location.href = "mensajes.html";
        }
        else {
            throw "Usuario y contraseña incorrecto";
        }
    }
    catch (e) {
        alert(e);
    }
}
