/// <reference path="../Modelo/Mensaje.js" />
/// <reference path="../Modelo/Usuario.js" />
/// <reference path="../node_modules/jquery/dist/jquery.min.js" />
// @ts-ignore
let listaUsuarios: Array<Usuario>=[];
// @ts-ignore
let listaMensajes: Array<Mensaje>=[];

$(document).ready(function (){
try{
    if (JSON.parse(localStorage.getItem("listaUsuarios"))==null){

        crearDatos();
    }
    $("#registro").click(registrar);


}catch (error){
    alert(error.message);
}
})

function registrar():void{
    // @ts-ignore
    let listaUsu:Array<Usuario> = JSON.parse(localStorage.getItem("listaUsuarios"));
    let nombre= $("#nombre").val();
    let email= $("#email").val();
    let password= $("#password").val();
    let password2= $("#password2").val();
    let sexo=$('input[name="sexo"]:checked').val();
    // @ts-ignore
    let usu:Usuario= new Usuario(nombre,email,password,sexo );

    listaUsu.push(usu);
    localStorage.setItem("listaUsuarios",JSON.stringify(listaUsu));


}
function crearDatos(){
    // @ts-ignore
    var usu:Usuario= new Usuario("unai", "uvadillo@gmail.com", "123456", "hombre");
    // @ts-ignore
    var msg:Mensaje= new Mensaje("pepe","asunto");
    let mensajes=[];
    mensajes.push(msg);
    usu.listaMensajes=mensajes;
    listaUsuarios.push(usu);
    localStorage.setItem("listaUsuarios",JSON.stringify(listaUsuarios));
}
