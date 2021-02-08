/// <reference path="../node_modules/jquery/dist/jquery.min.js" />
/// <reference path="../Modelo/Proyecto.js" />
/// <reference path="../Modelo/Usuario.js" />
// @ts-ignore
var listaUsuarios = [];
// @ts-ignore
var listaProyectos = [];
$(document).ready(function () {
    try {
        if (localStorage.getItem("datosUsuario") == null) {
            crearProyectos();
            crearUsuario();
        }
        $("#alta").click(alta);
        $("#consulta").click(consulta);
        $("#anadir").click(anadir);
        $("#borrar").click(borrar);
    }
    catch (error) {
        alert(error);
    }
});
function alta() {
    // @ts-ignore
    var listaUsu = JSON.parse(localStorage.getItem("datosUsuario"));
    var usuario = $("#usuario").val().toString();
    var contrasena = $("#contrasena").val().toString();
    // @ts-ignore
    var usu1 = new Usuario(usuario, contrasena);
    if (regexUsuario(usuario) && regexContrasena(contrasena)) {
        var color = prompt("Que color quieres de fondo?");
        // @ts-ignore
        var listaPro = [];
        // @ts-ignore
        usu1.color = color;
        // @ts-ignore
        usu1.listaProyectos = listaPro;
        listaUsu.push(usu1);
        localStorage.setItem("datosUsuario", JSON.stringify(listaUsu));
    }
}
function consulta() {
    // @ts-ignore
    var listaUsu = JSON.parse(localStorage.getItem("datosUsuario"));
    var usuario = $("#usuario").val().toString();
    var contrasena = $("#contrasena").val().toString();
    var lista = "";
    var colorusu = "";
    localStorage.setItem("usuarioLog", JSON.stringify(usuario));
    for (var x = 0; x < listaUsu.length; x++) {
        // @ts-ignore
        if (listaUsu[x].usuario == usuario && listaUsu[x].contrasena == contrasena) {
            // @ts-ignore
            colorusu = listaUsu[x].color;
            // @ts-ignore
            for (var z = 0; z < listaUsu[x].listaProyectos.length; z++) {
                // @ts-ignore
                lista = lista + "<li>" + listaUsu[x].listaProyectos[z].titulo + "</li>";
            }
        }
    }
    $("#proyectos").html(lista);
    $("body").css("background-color", colorusu);
}
function anadir() {
    // @ts-ignore
    var listaUsu = JSON.parse(localStorage.getItem("datosUsuario"));
    // @ts-ignore
    var usuLog = JSON.parse(localStorage.getItem("usuarioLog"));
    for (var x = 0; x < listaUsu.length; x++) {
        // @ts-ignore
        if (listaUsu[x].usuario == usuLog) {
            var proy = prompt("Titulo del proyecto");
            // @ts-ignore
            var proy1 = new Proyecto(proy);
            // @ts-ignore
            listaUsu[x].listaProyectos.push(proy1);
            localStorage.setItem("datosUsuario", JSON.stringify(listaUsu));
        }
    }
    consulta();
}
function borrar() {
    // @ts-ignore
    var usuarios = JSON.parse(localStorage.getItem('datosUsuario'));
    // @ts-ignore
    var usuLog = JSON.parse(localStorage.getItem("usuarioLog"));
    // @ts-ignore
    var usu = usuarios.find(function (o) { return o.usuario == usuLog; });
    // @ts-ignore
    var proyectos = usu.listaProyectos;
    var titulo = prompt('cual quieres eliminar introduce el titulo');
    // @ts-ignore
    var pos = proyectos.map(function (proyecto) { return proyecto.titulo; }).indexOf(titulo);
    console.log(pos);
    if (pos <= -1) {
        alert('No existe el producto');
    }
    else {
        proyectos.splice(pos, 1);
        localStorage.setItem('datosUsuario', JSON.stringify(usuarios));
    }
    consulta();
}
function crearUsuario() {
    // @ts-ignore
    var usu = new Usuario("unai", "123456");
    //@ts-ignore
    usu.color = "blue";
    listaUsuarios.push(usu);
    //@ts-ignore
    usu.listaProyectos = listaProyectos;
    localStorage.setItem("datosUsuario", JSON.stringify(listaUsuarios));
}
function crearProyectos() {
    // @ts-ignore
    var proy1 = new Proyecto("proyecto1");
    // @ts-ignore
    var proy2 = new Proyecto("proyecto2");
    listaProyectos.push(proy1);
    listaProyectos.push(proy2);
}
function regexUsuario(usuario) {
    var regex = new RegExp("^([a-zA-Z]+){3,32}$");
    if (!regex.test(usuario)) {
        throw "Usuario mal introducido";
    }
    else {
        return true;
    }
}
function regexContrasena(contrasena) {
    var regex = new RegExp("^[a-zA-Z0-9]{8,64}$");
    if (!regex.test(contrasena)) {
        throw "Contraseña mal introducido";
    }
    else {
        return true;
    }
}
