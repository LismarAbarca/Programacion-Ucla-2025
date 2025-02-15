export default class Cl_clase {
    constructor () {
        this.cntAprobados = 0;
        this.cntReprobados = 0;
        this.acNota = 0;
        this.cntEstudiante = 0;
    }

    procesarEstudiante (estudiante) {

        if (estudiante.nota >= 48) 
            return this.cntAprobados++;    

    if (estudiante.nota < 48) 
        return this.cntReprobados++;
    

    this.acNota += estudiante.nota;

    this.cntEstudiannte++;

}

cantidadAprobados () {
    return this.cntAprobados;
}

cantidadReprobados () {
    return this.cntReprobados;
}

promedioNota () {
    return this.acNota;
}

}
