class botonborrar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback (){

        this.innerHTML= '<button id="borrar">eliminar</button>'
    }
}



window.customElements.define('boton-borrar',botonborrar);