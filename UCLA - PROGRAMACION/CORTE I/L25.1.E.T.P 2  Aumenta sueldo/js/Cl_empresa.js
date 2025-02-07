export default class Cl_empresa {
    constructor () {
        this.acPorcentaje = 0;
        this.cntObrero = 0;
        this.cntEmpleado = 0;
    }

    procesarEmpleado (empleado) {
        this.acPorcentaje += empleado.porcentaje();

        if (empleado.tipo == 1)
            this.cntObrero++;

     this.cntEmpleado++;
    }

    
    montoTotal () {
        return this.acPorcentaje; }

    porcentajeObrero () {
        return this.cntObrero / this.cntEmpleado * 100 ;
    }
}