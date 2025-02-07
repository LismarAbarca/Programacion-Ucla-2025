import Cl_edad from "./Cl_edad.js";
import Cl_personas from "./Cl_personal.js";

let personas1 = new Cl_personas(15);
let personas2 = new Cl_personas(14);
let personas3 = new Cl_personas(19);
let personas4 = new Cl_personas(20);
let personas5 = new Cl_personas(16); 
let personas6 = new Cl_personas(18);   

let edad = new Cl_edad ();

edad.procesarPersonas(personas1);
edad.procesarPersonas(personas2);
edad.procesarPersonas(personas3);
edad.procesarPersonas(personas4);
edad.procesarPersonas(personas5);
edad.procesarPersonas(personas6);

let salida = document.getElementById ("salida");
salida.innerHTML = ` Resultados
<br> La edad promedio es de: ${edad.promedio()}`
