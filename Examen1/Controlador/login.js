/// <reference path="../node_modules/jquery/dist/jquery.min.js" />
var Proyecto = /** @class */ (function () {
    function Proyecto(titulo) {
        this.titulo = titulo;
    }
    Object.defineProperty(Proyecto.prototype, "getTitulo", {
        get: function () {
            return this.titulo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Proyecto.prototype, "setTitulo", {
        set: function (value) {
            this.titulo = value;
        },
        enumerable: false,
        configurable: true
    });
    return Proyecto;
}());
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
var listaUsuarios = [];
var listaProyectos = [];
$(document).ready(function () {
    try {
        if (localStorage.getItem("datosUsuario") == null) {
            crearProyectos();
            crearUsuario();
        }
        $("#alta").click(alta);
        $("#consulta").click(consulta);
        $("#anadir").click(anadir);
        $("#borrar").click(borrar);
    }
    catch (error) {
        alert(error);
    }
});
function alta() {
    var listaUsu = JSON.parse(localStorage.getItem("datosUsuario"));
    var usuario = $("#usuario").val().toString();
    var contrasena = $("#contrasena").val().toString();
    var usu1 = new Usuario(usuario, contrasena);
    if (regexUsuario(usuario) && regexContrasena(contrasena)) {
        var color = prompt("Que color quieres de fondo?");
        var listaPro = [];
        // @ts-ignore
        usu1.color = color;
        // @ts-ignore
        usu1.listaProyectos = listaPro;
        listaUsu.push(usu1);
        localStorage.setItem("datosUsuario", JSON.stringify(listaUsu));
    }
}
function consulta() {
    var listaUsu = JSON.parse(localStorage.getItem("datosUsuario"));
    var usuario = $("#usuario").val().toString();
    var contrasena = $("#contrasena").val().toString();
    var lista = "";
    var colorusu = "";
    localStorage.setItem("usuarioLog", JSON.stringify(usuario));
    for (var x = 0; x < listaUsu.length; x++) {
        // @ts-ignore
        if (listaUsu[x].usuario == usuario && listaUsu[x].contrasena == contrasena) {
            // @ts-ignore
            colorusu = listaUsu[x].color;
            // @ts-ignore
            for (var z = 0; z < listaUsu[x].listaProyectos.length; z++) {
                // @ts-ignore
                lista = lista + "<li>" + listaUsu[x].listaProyectos[z].titulo + "</li>";
            }
        }
    }
    $("#proyectos").html(lista);
    $("body").css("background-color", colorusu);
}
function anadir() {
    var listaUsu = JSON.parse(localStorage.getItem("datosUsuario"));
    var usuLog = JSON.parse(localStorage.getItem("usuarioLog"));
    for (var x = 0; x < listaUsu.length; x++) {
        // @ts-ignore
        if (listaUsu[x].usuario == usuLog) {
            var proy = prompt("Titulo del proyecto");
            var proy1 = new Proyecto(proy);
            // @ts-ignore
            listaUsu[x].listaProyectos.push(proy1);
            localStorage.setItem("datosUsuario", JSON.stringify(listaUsu));
        }
    }
    consulta();
}
function borrar() {
    var usuarios = JSON.parse(localStorage.getItem('datosUsuario'));
    var usuLog = JSON.parse(localStorage.getItem("usuarioLog"));
    // @ts-ignore
    var usu = usuarios.find(function (o) { return o.usuario == usuLog; });
    var proyectos = usu.listaProyectos;
    var titulo = prompt('cual quieres eliminar introduce el titulo');
    // @ts-ignore
    var pos = proyectos.map(function (proyecto) { return proyecto.titulo; }).indexOf(titulo);
    console.log(pos);
    if (pos <= -1) {
        alert('No existe el producto');
    }
    else {
        proyectos.splice(pos, 1);
        localStorage.setItem('datosUsuario', JSON.stringify(usuarios));
    }
    consulta();
}
function crearUsuario() {
    var usu = new Usuario("unai", "123456");
    //@ts-ignore
    usu.color = "blue";
    listaUsuarios.push(usu);
    //@ts-ignore
    usu.listaProyectos = listaProyectos;
    localStorage.setItem("datosUsuario", JSON.stringify(listaUsuarios));
}
function crearProyectos() {
    var proy1 = new Proyecto("proyecto1");
    var proy2 = new Proyecto("proyecto2");
    listaProyectos.push(proy1);
    listaProyectos.push(proy2);
}
function regexUsuario(usuario) {
    var regex = new RegExp("^([a-zA-Z]+){3,32}$");
    if (!regex.test(usuario)) {
        throw "Usuario mal introducido";
    }
    else {
        return true;
    }
}
function regexContrasena(contrasena) {
    var regex = new RegExp("^[a-zA-Z0-9]{8,64}$");
    if (!regex.test(contrasena)) {
        throw "Contraseña mal introducido";
    }
    else {
        return true;
    }
}
