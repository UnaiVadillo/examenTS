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
    alert(error);
}
})

function registrar():void{
    try {
        // @ts-ignore
        let listaUsu: Array<Usuario> = JSON.parse(localStorage.getItem("listaUsuarios"));
        let nombre: string = $("#nombre").val().toString();
        let email: string = $("#email").val().toString();
        let password: string = $("#password").val().toString();
        let password2: string = $("#password2").val().toString();
        let sexo: string = $('input[name="sexo"]:checked').val().toString();
        // @ts-ignore
        let usu: Usuario = new Usuario(nombre, email, password, sexo);
        // @ts-ignore
        let usuario = listaUsu.find(o => o.usuario == usu.usuario);
        console.log(usuario);
        if (usuario==undefined){


            if (validarVacio(nombre )&& validarVacio(email) && validarVacio(password) && validarVacio(sexo)){
                if (regexPass(password) && password == password2) {
                    listaUsu.push(usu);
                    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsu));
                    alert("Usuario " + usu.usuario + " ha sido creado");
                    window.location.href = "login.html";
                } else if (password != password2) {
                    throw "Contraseñas no coinciden";
                }
            }
        }else {
            throw "Usuario ya existente";
        }

    }catch (e){
        alert(e);
    }

}
function crearDatos():void{
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
function validarVacio(text:string):boolean{
    try {
        if (text == "") {
            throw "El campo "+ text +"no puede estar vacio";
            return false
        }else {
            return true;
        }
    }catch (e) {
        alert(e);
    }
}
function regexPass(pass:string):boolean{
    var regex = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9A-z]{8,}$")
    if(!regex.test(pass)){
        throw "Contraseña debe tener 8 digitos y no puede contener simbolos";
        return false;
    }else{
        return true;
    }
}