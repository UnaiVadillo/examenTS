/// <reference path="../node_modules/jquery/dist/jquery.min.js" />
class Proyecto{
    private titulo:string;


    constructor(titulo: string) {
        this.titulo = titulo;
    }

    get getTitulo(): string {
        return this.titulo;
    }

    set setTitulo(value: string) {
        this.titulo = value;
    }

}
class Usuario{
    private usuario:string;
    private contrasena:string;
    private color:string;
    private listaProyectos:Array<Proyecto>;

    constructor(usuario: string, contrasena: string) {
        this.usuario = usuario;
        this.contrasena = contrasena;
    }

    get getColor(): string {
        return this.color;
    }

    set setColor(value: string) {
        this.color = value;
    }

    get getUsuario(): string {
        return this.usuario;
    }

    set setUsuario(value: string) {
        this.usuario = value;
    }

    get getContrasena(): string {
        return this.contrasena;
    }

    set setContrasena(value: string) {
        this.contrasena = value;
    }

    get getListaProyectos(): Array<Proyecto> {
        return this.listaProyectos;
    }

    set setListaProyectos(value: Array<Proyecto>) {
        this.listaProyectos = value;
    }

}

let listaUsuarios: Array<Usuario>=[];
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
    let listaUsu:Array<Usuario> = JSON.parse(localStorage.getItem("datosUsuario"));
    var usuario:string = $("#usuario").val().toString();
    var contrasena:string = $("#contrasena").val().toString();
    let usu1:Usuario= new Usuario(usuario, contrasena);
    if (regexUsuario(usuario) && regexContrasena(contrasena)) {
        var color: string = prompt("Que color quieres de fondo?");
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
    let listaUsu:Array<Usuario>=JSON.parse(localStorage.getItem("datosUsuario"));
    let usuLog:Array<Usuario>=JSON.parse(localStorage.getItem("usuarioLog"));
    for (var x=0; x<listaUsu.length;x++){
        // @ts-ignore
        if (listaUsu[x].usuario == usuLog){
            var proy= prompt("Titulo del proyecto");
            var proy1:Proyecto = new Proyecto(proy);

            // @ts-ignore
            listaUsu[x].listaProyectos.push(proy1);
            localStorage.setItem("datosUsuario", JSON.stringify(listaUsu));
        }
    }
    consulta();

}
function borrar():void {
    let usuarios: Array<Usuario> = JSON.parse(localStorage.getItem('datosUsuario'));
    let usuLog: Array<Usuario> = JSON.parse(localStorage.getItem("usuarioLog"));

    // @ts-ignore
    let usu = usuarios.find(o => o.usuario == usuLog);

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
    let usu:Usuario = new Usuario("unai","123456");
    //@ts-ignore
    usu.color = "blue";
    listaUsuarios.push(usu);
    //@ts-ignore
    usu.listaProyectos = listaProyectos;
    localStorage.setItem("datosUsuario",JSON.stringify(listaUsuarios));

}

function crearProyectos(){
    var proy1:Proyecto = new Proyecto("proyecto1");
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