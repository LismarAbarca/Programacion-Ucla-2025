export default class Cl_empresa {
    constructor () {
        this.cntClientesFemeninosME = 0;
        this.menorEdad = 99999;
        this.acEdad = 0;
        this.cntEdad = 0;
    }

    procesarCliente (cliente) {

        if (cliente.sexo == "F") 
            this.cntClientesFemeninosME++;

        if (cliente.edad < this.menorEdad)
            this.menorEdad = cliente.edad;

        this.acEdad += cliente.edad;

        this.cntEdad++;
    }

    ClienteFMayorEdad () {
        return this.cntClientesFemeninosME;
    }

    clienteMenorEdad () {
        return this.menorEdad;
    }

    promedio () {
        return this.acEdad / this.cntEdad;
    }
    
}