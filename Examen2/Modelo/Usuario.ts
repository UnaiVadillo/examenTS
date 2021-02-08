/// <reference path="../Modelo/Mensaje.js" />
class Usuario{
    private nombre:string;
    private usuario:string;
    private password:string;
    private sexo:string;
    // @ts-ignore
    private listaMensajes:Array<Mensaje>;


    constructor(nombre: string, usuario: string, password: string, sexo: string) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.password = password;
        this.sexo = sexo;
    }

    get getUsuario(): string {
        return this.usuario;
    }

    set setUsuario(value: string) {
        this.usuario = value;
    }

    get getPassword(): string {
        return this.password;
    }

    set setPassword(value: string) {
        this.password = value;
    }

    // @ts-ignore
    get getListaMensajes(): Array<Mensaje> {
        return this.listaMensajes;
    }

    // @ts-ignore
    set setListaMensajes(value: Array<Mensaje>) {
        this.listaMensajes = value;
    }

    get getNombre(): string {
        return this.nombre;
    }

    set setNombre(value: string) {
        this.nombre = value;
    }

    get getSexo(): string {
        return this.sexo;
    }

    set setSexo(value: string) {
        this.sexo = value;
    }
}