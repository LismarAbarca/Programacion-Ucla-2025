export default class Cl_Suscriptor {

    constructor(cedula, plan) {
        this.cedula = cedula;
        this.plan = plan;
    }
 
set cedula(c) { 
    this._cedula = c; } 
    
    
    get cedula() { 
    return this._cedula; } 

get plan() {
     return this._plan; }  


set plan(p) {
     this._plan = p; }
     

precioPgar(){
    if(this.plan==="A"){
        return 3+(3*(10/100));
    }else if(this.plan==="B"){
        return 5+(5*(10/100));
    }else if(this.plan==="C"){
        return 10;
}
}}