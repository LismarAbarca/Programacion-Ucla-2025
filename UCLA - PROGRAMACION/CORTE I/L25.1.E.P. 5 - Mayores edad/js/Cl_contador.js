export default class Cl_contador {
    constructor() {
      this.cntPersonas = 0;
      this.cntPersonasMayor = 0;
    }

    procesarPersonas (personas) {

        this.cntPersonas++;

        if (personas.edad >= 18) 
            return this.cntPersonasMayor++;
    }
    

    cantidadPersonas() {
        return this.cntPersonas;
    }

    cantidadPersonasMayores() {
        return this.cntPersonasMayor;
    }

    porcentajeMayorEdad () {

        return (this.cntPersonasMayor * 100) / this.cntPersonas;
    }

}
