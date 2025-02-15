/*En una empresa se tiene personal obrero y personal administrativo. La empresa necesita
determinar cuál es el monto promedio que paga por cada tipo de personal.
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana
$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo)
gana $150:*/

import Cl_empresa from "./Cl_Empresa.js";
import Cl_personal from "./Cl_personal.js";

let personal1 = new Cl_personal("Juan", "Obrero", 100);
let personal2 = new Cl_personal("Ana", "Obrero", 120);
let personal3 = new Cl_personal("Lin", "Administrativo", 200);
let personal4 = new Cl_personal("Mary", "Obrero", 50);
let personal5 = new Cl_personal("Carlos", "Administrativo", 150);

//Se crea el objeto empresa
let empresa = new Cl_empresa ();

empresa.procesarPersonal(personal1);
empresa.procesarPersonal(personal2);
empresa.procesarPersonal(personal3);
empresa.procesarPersonal(personal4);    
empresa.procesarPersonal(personal5);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br> Monto total de obreros: $ ${empresa.montoTotalObreros()}
<br> Monto promedio de obreros: $ ${empresa.promedioObreros()}
<br> Monto total de administrativos: $ ${empresa.montoTotalAd()}
<br> Monto promedio de administrativos: $ ${empresa.promedioAd()}`