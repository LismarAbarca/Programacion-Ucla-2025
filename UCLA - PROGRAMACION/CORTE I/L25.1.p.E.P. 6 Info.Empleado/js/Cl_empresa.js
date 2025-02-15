export default class Cl_empresa {
    constructor () {
        this.acSalariosObreros = 0;
        this.cntObreros =0;
        this.acSalariosAd = 0;
        this.cntAdministrativo = 0;
    }

    procesarPersonal (personal) {

        if (personal.tipo == "Obrero") 
            this.acSalariosObreros += personal.salario;

    
     if (personal.tipo == "Administrativo") 
            this.acSalariosAd += personal.salario;


     if (personal.tipo == "Obrero") 
            this.cntObreros ++;

     if (personal.tipo == "Administrativo") 
            this.cntAdministrativo ++;
        
    }



    montoTotalObreros () {
        return this.acSalariosObreros;
    }

    promedioObreros () {
        return this.acSalariosObreros / this.cntObreros;
    }

    montoTotalAd () {
        return this.acSalariosAd;
    }

    promedioAd () {
        return this.acSalariosAd / this.cntAdministrativo;
    }
}







