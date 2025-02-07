export default class  Cl_ganancia {
    constructor () {
        this.acPorcentaje = 0; 
    }

   procesarArticulo (articulo) {

    this.acPorcentaje += articulo.porcentaje();
   }

   gananciaTotal () {
    return this.acPorcentaje ;
   }
}