/// <reference path="../Modelo/Mensaje.js" />
var Usuario = /** @class */ (function () {
    function Usuario(nombre, usuario, password, sexo) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.password = password;
        this.sexo = sexo;
    }
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
    Object.defineProperty(Usuario.prototype, "getPassword", {
        get: function () {
            return this.password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "setPassword", {
        set: function (value) {
            this.password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "getListaMensajes", {
        // @ts-ignore
        get: function () {
            return this.listaMensajes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "setListaMensajes", {
        // @ts-ignore
        set: function (value) {
            this.listaMensajes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "setNombre", {
        set: function (value) {
            this.nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "getSexo", {
        get: function () {
            return this.sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "setSexo", {
        set: function (value) {
            this.sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    return Usuario;
}());
