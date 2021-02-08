var Mensaje = /** @class */ (function () {
    function Mensaje(destinatario, asunto) {
        this.destinatario = destinatario;
        this.asunto = asunto;
    }
    Object.defineProperty(Mensaje.prototype, "getDestinatario", {
        get: function () {
            return this.destinatario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mensaje.prototype, "setDestinatario", {
        set: function (value) {
            this.destinatario = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mensaje.prototype, "getAsunto", {
        get: function () {
            return this.asunto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mensaje.prototype, "setAsunto", {
        set: function (value) {
            this.asunto = value;
        },
        enumerable: false,
        configurable: true
    });
    return Mensaje;
}());
