export default class Cl_edad {
    constructor () {
        this.acEdad = 0;
        this.cntPersonas = 0;
    }

    procesarPersonas (personas) {

        this.acEdad += personas.edad;
        this.cntPersonas++;
    }

    promedio () {
        return this.acEdad / this.cntPersonas;
    }
}
