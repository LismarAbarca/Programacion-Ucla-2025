export default class Cl_empleado {
    constructor (cedula, tipo, sueldoActual) {
        this.cedula = cedula ;
        this.tipo = tipo ;
        this.sueldoActual = sueldoActual;
    }

    set cedula (c) {
        this._cedula = c;
    } 

    get cedula () {
        return this._cedula;
    }

    set tipo (t) {
        this._tipo = t;
    }

    get tipo () {
        return this._tipo;
    }


    set sueldoActual (sA)  {
        this._sueldoActual = +sA;
    }

    get sueldoActual () {       
        return this._sueldoActual;    
    }

    porcentaje () {
        if (this.tipo == 1)
            return (this.sueldoActual * 20 )/ 100;
        else if (this.tipo == 2)
            return (this.sueldoActual * 10) / 100;
        else
            return 0;
    }

    

    sueldoActualizado() {
        return (this.sueldoActual + this.porcentaje());
    }

       
}