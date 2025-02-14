export default class Cl_cantidad {
    constructor () {
        this.cntMujeres = 0;
        this.cntHombres = 0;
        this.cntPersonas = 0;
    }

    procesarPersona (persona) {

        this.cntPersonas++;

        if (persona.sexo == "F")
            return this.cntMujeres++;

        if (persona.sexo == "M" )
          return this.cntHombres++;

    
    }

    cantidadMujeres() {
        return this.cntMujeres;
    }

    cantidadHombres() {
        return this.cntHombres;
    }

    cantidadPersonas() {
        return this.cntPersonas;
    }
}