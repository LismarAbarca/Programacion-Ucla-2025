export default class Cl_cliente {
    constructor (nombre, tipo, edad, sexo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
        this.sexo = sexo;
    }

    set nombre (n) {
        this._nombre = n;
    }

    get nombre () { 
    return this._nombre;
    }

    set tipo (t) {
        this._tipo = t;
    }

    get tipo () {
        return this._tipo;
    }

    set edad (e) {
        this._edad = e;
    }

    get edad () {
        return this._edad;
    }

    set sexo (s) {
        this._sexo = s;
    }

    get sexo () {
        return this._sexo;
    }

    
}