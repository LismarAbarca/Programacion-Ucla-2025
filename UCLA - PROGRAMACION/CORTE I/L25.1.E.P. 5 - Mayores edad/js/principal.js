/*Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos 
datos y reporte al final el porcentaje de personas que son mayores */

import Cl_contador from "./Cl_contador.js";
import Cl_personas from "./Cl_personas.js";

let persona1 = new Cl_personas ("Luis", 15 );
let persona2 = new Cl_personas ("Ana", 19);
let persona3 = new Cl_personas ("Jose", 21);
let persona4 = new Cl_personas ("Carmen", 17);
let persona5 = new Cl_personas ("Rosa", 18);
let persona6 = new Cl_personas ("Jose", 22);
let persona7= new Cl_personas ("Maria", 17);
let persona8 = new Cl_personas ("Luz", 19);
let persona9 = new Cl_personas ("Rafael", 23 );
let persona10 = new Cl_personas ("Liz", 15);
let persona11 = new Cl_personas ("Marcos", 20);
let persona12 = new Cl_personas ("Leo" ,16 );

//crear objeto
let contador = new Cl_contador();


contador.procesarPersonas (persona1);
contador.procesarPersonas (persona2);
contador.procesarPersonas (persona3);
contador.procesarPersonas (persona4);
contador.procesarPersonas (persona5);
contador.procesarPersonas (persona6);
contador.procesarPersonas (persona7);
contador.procesarPersonas (persona8);
contador.procesarPersonas (persona9);
contador.procesarPersonas (persona10);
contador.procesarPersonas (persona11);
contador.procesarPersonas (persona12);


let salida = document.getElementById ("salida");
salida.innerHTML = `Resultados;
<br> Cantidad de personas: ${contador.cantidadPersonas()}
<br> Cantidad de personas mayores de edad: ${contador.cantidadPersonasMayores()}
<br> Porcentaje de personas mayores de edad: ${contador.porcentajeMayorEdad()} `
