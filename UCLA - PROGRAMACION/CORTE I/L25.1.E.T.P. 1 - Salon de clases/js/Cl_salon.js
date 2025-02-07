export default class Cl_salon {
    constructor(acEdad, cntEstudiantes, mayorEdad, auxNombreMayor, cntChicas, cntChicasMayorEdad) {
        this.acEdad = 0;
        this.cntEstudiantes = 0;
        this.mayorEdad = 0;
        this.auxNombreMayor = ' ';
        this.cntChicas = 0;
        this.cntChicasMayorEdad = 0;
    }

    procesarEstudiante(Estudiante) {
        this.acEdad += Estudiante.edad;

        this.cntEstudiantes++;

        if (Estudiante.edad > this.mayorEdad) {
            this.mayorEdad = Estudiante.edad;
            this.auxNombreMayor = Estudiante.nombre;
        }

        if (Estudiante.sexo == 'F') {
            this.cntChicas++;
        }

        if (Estudiante.edad >= 18) {
            this.cntChicasMayorEdad++;
        }
    }

        edadPromedio() {
            return this.acEdad / this.cntEstudiantes;
        }
        
        nombreMayorNota() {
            return this.auxNombreMayor;
        }

        porcentajeMayoresChicas() {
            return (this.cntChicasMayorEdad / this.cntChicas) * 100;
        }



    
}