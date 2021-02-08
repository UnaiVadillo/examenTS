/// <reference path="../Modelo/Mensaje.js" />
/// <reference path="../Modelo/Usuario.js" />
/// <reference path="../node_modules/jquery/dist/jquery.min.js" />
// @ts-ignore
var listaUsuarios = [];
// @ts-ignore
var listaMensajes = [];
$(document).ready(function () {
    try {
        if (JSON.parse(localStorage.getItem("listaUsuarios")) == null) {
            crearDatos();
        }
        $("#registro").click(registrar);
    }
    catch (error) {
        alert(error.message);
    }
});
function registrar() {
    // @ts-ignore
    var listaUsu = JSON.parse(localStorage.getItem("listaUsuarios"));
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var password2 = $("#password2").val();
    var sexo = $('input[name="sexo"]:checked').val();
    // @ts-ignore
    var usu = new Usuario(nombre, email, password, sexo);
    listaUsu.push(usu);
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsu));
}
function crearDatos() {
    // @ts-ignore
    var usu = new Usuario("unai", "uvadillo@gmail.com", "123456", "hombre");
    // @ts-ignore
    var msg = new Mensaje("pepe", "asunto");
    var mensajes = [];
    mensajes.push(msg);
    usu.listaMensajes = mensajes;
    listaUsuarios.push(usu);
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
}
