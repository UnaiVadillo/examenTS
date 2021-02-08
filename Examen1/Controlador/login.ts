/// <reference path="../node_modules/jquery/dist/jquery.min.js" />
/// <reference path="../Modelo/Proyecto.js" />
/// <reference path="../Modelo/Usuario.js" />

// @ts-ignore
let listaUsuarios: Array<Usuario>=[];
// @ts-ignore
let listaProyectos: Array<Proyecto>=[];

$(document).ready(function () {
    try{
        if(localStorage.getItem("datosUsuario")==null){
            crearProyectos();
            crearUsuario();
        }
        $("#alta").click(alta);
        $("#consulta").click(consulta);
        $("#anadir").click(anadir);
        $("#borrar").click(borrar);

    }catch (error){
        alert(error);
    }

});
function alta():void{
    // @ts-ignore
    let listaUsu:Array<Usuario> = JSON.parse(localStorage.getItem("datosUsuario"));
    var usuario:string = $("#usuario").val().toString();
    var contrasena:string = $("#contrasena").val().toString();
    // @ts-ignore
    let usu1:Usuario= new Usuario(usuario, contrasena);
    if (regexUsuario(usuario) && regexContrasena(contrasena)) {
        var color: string = prompt("Que color quieres de fondo?");
        // @ts-ignore
        let listaPro: Array<Proyecto> = [];
        // @ts-ignore
        usu1.color = color;
        // @ts-ignore
        usu1.listaProyectos = listaPro;

        listaUsu.push(usu1);
        localStorage.setItem("datosUsuario", JSON.stringify(listaUsu));
    }
}
function consulta():void{
    // @ts-ignore
    let listaUsu:Array<Usuario> = JSON.parse(localStorage.getItem("datosUsuario"));
    var usuario:string = $("#usuario").val().toString();
    var contrasena:string = $("#contrasena").val().toString();
    var lista:string="";
    var colorusu:string="";
    localStorage.setItem("usuarioLog", JSON.stringify(usuario));
    for(var x=0; x<listaUsu.length;x++){
        // @ts-ignore
        if (listaUsu[x].usuario== usuario && listaUsu[x].contrasena == contrasena){
            // @ts-ignore
            colorusu=listaUsu[x].color;
            // @ts-ignore
            for (var z=0; z<listaUsu[x].listaProyectos.length;z++) {
                // @ts-ignore

                lista = lista + "<li>" + listaUsu[x].listaProyectos[z].titulo + "</li>";

            }

        }
    }
    $("#proyectos").html(lista);
    $("body").css("background-color",colorusu);

}
function anadir():void{
    // @ts-ignore
    let listaUsu:Array<Usuario>=JSON.parse(localStorage.getItem("datosUsuario"));
    // @ts-ignore
    let usuLog:Array<Usuario>=JSON.parse(localStorage.getItem("usuarioLog"));
    for (var x=0; x<listaUsu.length;x++){
        // @ts-ignore
        if (listaUsu[x].usuario == usuLog){
            var proy= prompt("Titulo del proyecto");
            // @ts-ignore
            var proy1:Proyecto = new Proyecto(proy);

            // @ts-ignore
            listaUsu[x].listaProyectos.push(proy1);
            localStorage.setItem("datosUsuario", JSON.stringify(listaUsu));
        }
    }
    consulta();

}
function borrar():void {
    // @ts-ignore
    let usuarios: Array<Usuario> = JSON.parse(localStorage.getItem('datosUsuario'));
    // @ts-ignore
    let usuLog: Array<Usuario> = JSON.parse(localStorage.getItem("usuarioLog"));

    // @ts-ignore
    let usu = usuarios.find(o => o.usuario == usuLog);
    // @ts-ignore
    let proyectos: Array<Proyecto> = usu.listaProyectos;

    let titulo: string = prompt('cual quieres eliminar introduce el titulo');

    // @ts-ignore
    var pos = proyectos.map(proyecto => proyecto.titulo).indexOf(titulo);
    console.log(pos);
    if (pos <= -1) {
        alert('No existe el producto')
    } else {
        proyectos.splice(pos, 1);
        localStorage.setItem('datosUsuario', JSON.stringify(usuarios));

    }
    consulta();
}

function crearUsuario():void{
    // @ts-ignore
    let usu:Usuario = new Usuario("unai","123456");
    //@ts-ignore
    usu.color = "blue";
    listaUsuarios.push(usu);
    //@ts-ignore
    usu.listaProyectos = listaProyectos;
    localStorage.setItem("datosUsuario",JSON.stringify(listaUsuarios));

}

function crearProyectos(){
    // @ts-ignore
    var proy1:Proyecto = new Proyecto("proyecto1");
    // @ts-ignore
    var proy2:Proyecto = new Proyecto("proyecto2");
    listaProyectos.push(proy1);
    listaProyectos.push(proy2);
}

function regexUsuario(usuario:string):boolean{
    var regex = new RegExp("^([a-zA-Z]+){3,32}$");
    if(!regex.test(usuario)){
        throw "Usuario mal introducido";
    }else{
        return true;
    }

}
function regexContrasena(contrasena:string):boolean{
    var regex = new RegExp("^[a-zA-Z0-9]{8,64}$");
    if(!regex.test(contrasena)){
        throw "Contraseña mal introducido";
    }else{
        return true;
    }

}