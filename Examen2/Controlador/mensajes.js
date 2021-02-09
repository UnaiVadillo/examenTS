/// <reference path="../Modelo/Mensaje.js" />
/// <reference path="../Modelo/Usuario.js" />
/// <reference path="../node_modules/jquery/dist/jquery.min.js" />
$(document).ready(function () {
    try {
        mostrarMensajes();
    }
    catch (e) {
        alert(e);
    }
});
function mostrarMensajes() {
    // @ts-ignore
    var datosUsu = JSON.parse(localStorage.getItem("listaUsuarios"));
    var usuLog = JSON.parse(localStorage.getItem("usuLog"));
    // @ts-ignore
    var usu = datosUsu.find(function (u) { return u.usuario == usuLog; });
    // @ts-ignore
    var numMensajes = usu.listaMensajes.length;
    var lista = "";
    // @ts-ignore
    for (var z = 0; z < usu.listaMensajes.length; z++) {
        // @ts-ignore
        lista = lista + "<li>" + usu.listaMensajes[z].destinatario + " " + usu.listaMensajes[z].asunto + "</li>";
    }
    $("#numMensajes").html(numMensajes);
    $("#mensajes").html(lista);
}
