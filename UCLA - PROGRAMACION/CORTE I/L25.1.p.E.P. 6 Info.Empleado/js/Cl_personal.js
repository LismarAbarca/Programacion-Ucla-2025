export default class Cl_personal {
    constructor (nombre, tipo, salario) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.salario = salario;
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

    set salario (s) {   
        this._salario = s;  
    }

    get salario () {
        return this._salario;
    }
}
