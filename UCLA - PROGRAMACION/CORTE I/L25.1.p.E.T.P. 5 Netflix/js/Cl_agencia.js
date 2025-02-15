export default class Cl_Agencia {
    constructor() {
        this.cntSuscriptorA = 0;
        this.cntSuscriptorB = 0;
        this.cntSuscriptorC = 0;
    }
    procesarSuscriptor(suscriptor) {
        if (suscriptor.plan === "A") {
            this.cntSusA++;
        } 
        else if (suscriptor.plan === "B") {
            this.cntSuscriptorB++;
        }
        else {
            this.cntSuscriptorC++;
        }
    }
    planFavorito() {
        if (this.cntSuscriptorA > this.cntSuscriptorB && this.cntSuscriptorA > this.cntSuscriptorC) {
            return "Plan A";
        } else if (this.cntSuscriptorB > this.cntSuscriptorA && this.cntSuscriptorB > this.cntSuscriptorC) {
            return "Plan B";
        } else if (this.cntSuscriptorC > this.cntSuscriptorA && this.cntSuscriptorC > this.cntSuscriptorB) {
            return "Plan C";
        }
        else {
            return "Iguales de favorito: Plan A, Plan B y Plan C.";
        }
    }
    porcentajeSuscriptorC() {
        return (this.cntSuscriptorC / (this.cntSuscriptorA + this.cntSuscriptorB + this.cntSuscriptorC)) * 100;
    }
}