/// <reference path="../Modelo/Mensaje.js" />
/// <reference path="../Modelo/Usuario.js" />
/// <reference path="../node_modules/jquery/dist/jquery.min.js" />


$(document).ready(function (){
   try{
       mostrarMensajes();
   } catch (e){
       alert(e);
   }
});
function mostrarMensajes(){
    // @ts-ignore
    let datosUsu:Array<Usuario>= JSON.parse(localStorage.getItem("listaUsuarios"));
    let usuLog:string= JSON.parse(localStorage.getItem("usuLog"));
    // @ts-ignore
    let usu:Array<Usuario>= datosUsu.find(u=>u.usuario ==usuLog );
    // @ts-ignore
    let numMensajes = usu.listaMensajes.length;
    let lista: string ="";
    // @ts-ignore
    for (var z=0; z<usu.listaMensajes.length;z++) {
        // @ts-ignore
        lista = lista + "<li>" + usu.listaMensajes[z].destinatario + " "+ usu.listaMensajes[z].asunto +  "</li>";

    }
    $("#numMensajes").html(numMensajes)
    $("#mensajes").html(lista);


}