import Cl_juegos from "./Cl_juegos.js";
import Cl_partido from "./Cl_partido .js";

let partido1 = new Cl_partido(1);
let partido2 = new Cl_partido(1);
let partido3 = new Cl_partido(0);        
let partido4 = new Cl_partido(1);
let partido5 = new Cl_partido(0);        
let partido6 = new Cl_partido(1);

let juegos = new Cl_juegos();

juegos.procesarPartido(partido1);
juegos.procesarPartido(partido2);        
juegos.procesarPartido(partido3);
juegos.procesarPartido(partido4);        
juegos.procesarPartido(partido5);        
juegos.procesarPartido(partido6);

let salida=document.getElementById("salida");
salida.innerHTML=`Resultado:
<br> ganaste el ${juegos.porcentajeJuegos()} %  
de los juegos`