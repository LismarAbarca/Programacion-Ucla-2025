export default class Cl_partido {

    constructor (resultados) {
        this.resultados = resultados;
    }

    set resultados (r) {
      this._resultados = r;
    }

    get resultados () {
        return this._resultados;
    }
}