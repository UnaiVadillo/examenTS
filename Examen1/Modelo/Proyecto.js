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
