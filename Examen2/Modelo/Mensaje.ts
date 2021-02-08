class Mensaje{
    private destinatario:string;
    private asunto:string;

    constructor(destinatario: string, asunto: string) {
        this.destinatario = destinatario;
        this.asunto = asunto;
    }

    get getDestinatario(): string {
        return this.destinatario;
    }

    set setDestinatario(value: string) {
        this.destinatario = value;
    }

    get getAsunto(): string {
        return this.asunto;
    }

    set setAsunto(value: string) {
        this.asunto = value;
    }
}