/// <reference path="../Modelo/Proyecto.js" />
var Usuario = /** @class */ (function () {
    function Usuario(usuario, contrasena) {
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
    Object.defineProperty(Usuario.prototype, "getColor", {
        get: function () {
            return this.color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "setColor", {
        set: function (value) {
            this.color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "getUsuario", {
        get: function () {
            return this.usuario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "setUsuario", {
        set: function (value) {
            this.usuario = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "getContrasena", {
        get: function () {
            return this.contrasena;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "setContrasena", {
        set: function (value) {
            this.contrasena = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "getListaProyectos", {
        get: function () {
            return this.listaProyectos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "setListaProyectos", {
        set: function (value) {
            this.listaProyectos = value;
        },
        enumerable: false,
        configurable: true
    });
    return Usuario;
}());
