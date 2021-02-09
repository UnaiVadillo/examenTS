/// <reference path="../Modelo/Proyecto.js" />
class Usuario{
    private usuario:string;
    private contrasena:string;
    private color:string;
    // @ts-ignore
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