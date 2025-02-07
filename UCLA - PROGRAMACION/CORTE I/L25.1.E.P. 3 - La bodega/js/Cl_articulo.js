export default class Cl_articulo {
    constructor (precioArticulo) {
        this.precioArticulo = precioArticulo;
    }

    set precioArticulo (precioArticulo) {
        this._precioArticulo = +precioArticulo;
    }

    get precioArticulo () {
        return this._precioArticulo ;
    }

    porcentaje() {
        return (this.precioArticulo * 50)/ 100 ;
    }
}