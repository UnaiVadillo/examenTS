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
