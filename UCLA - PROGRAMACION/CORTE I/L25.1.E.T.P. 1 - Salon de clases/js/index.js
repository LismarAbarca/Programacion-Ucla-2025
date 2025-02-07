import Cl_estudiante from "./Cl_estudiante.js";
import Cl_salon from "./Cl_salon.js";

let estud1 = new Cl_estudiante("Luis", 16, "M");
let estud2 = new Cl_estudiante("Ana", 19, "F");
let estud3 = new Cl_estudiante("Jose", 20, "M");
let estud4 = new Cl_estudiante("Carmen", 18, "F");
let salon = new Cl_salon();

salon.procesarEstudiante(estud1);
salon.procesarEstudiante(estud2);        
salon.procesarEstudiante(estud3);
salon.procesarEstudiante(estud4);

let salida=document.getElementById("salida");
salida.innerHTML=`
Edad Promedio: ${salon.edadPromedio()}
<br> Estudiante con Mayor nota: ${salon.nombreMayorNota()}
<br> Porcentaje de chicas mayor edad: ${salon.porcentajeMayoresChicas()}`