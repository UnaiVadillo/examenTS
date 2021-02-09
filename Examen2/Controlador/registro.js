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
        alert(error);
    }
});
function registrar() {
    try {
        // @ts-ignore
        var listaUsu = JSON.parse(localStorage.getItem("listaUsuarios"));
        var nombre = $("#nombre").val().toString();
        var email = $("#email").val().toString();
        var password = $("#password").val().toString();
        var password2 = $("#password2").val().toString();
        var sexo = $('input[name="sexo"]:checked').val().toString();
        // @ts-ignore
        var usu_1 = new Usuario(nombre, email, password, sexo);
        // @ts-ignore
        var usuario = listaUsu.find(function (o) { return o.usuario == usu_1.usuario; });
        console.log(usuario);
        if (usuario == undefined) {
            if (validarVacio(nombre) && validarVacio(email) && validarVacio(password) && validarVacio(sexo)) {
                if (regexPass(password) && password == password2) {
                    listaUsu.push(usu_1);
                    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsu));
                    alert("Usuario " + usu_1.usuario + " ha sido creado");
                    window.location.href = "login.html";
                }
                else if (password != password2) {
                    throw "Contraseñas no coinciden";
                }
            }
        }
        else {
            throw "Usuario ya existente";
        }
    }
    catch (e) {
        alert(e);
    }
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
function validarVacio(text) {
    try {
        if (text == "") {
            throw "El campo " + text + "no puede estar vacio";
            return false;
        }
        else {
            return true;
        }
    }
    catch (e) {
        alert(e);
    }
}
function regexPass(pass) {
    var regex = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9A-z]{8,}$");
    if (!regex.test(pass)) {
        throw "Contraseña debe tener 8 digitos y no puede contener simbolos";
        return false;
    }
    else {
        return true;
    }
}
