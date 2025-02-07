import Cl_empleado from "./Cl_empleado.js";
import Cl_empresa from "./Cl_empresa.js";


let empleado1  = new  Cl_empleado (555 ,2 , 200);
let empleado2 = new  Cl_empleado (888 ,1 , 500);
let empleado3 = new Cl_empleado (777 ,2 , 400);
let empleado4 = new Cl_empleado (666 ,1 , 600);
let empleado5 = new Cl_empleado (444 ,1 , 800);

// crear el objeto empresa
let empresa = new Cl_empresa ();
let empleado = new Cl_empleado ();

empresa.procesarEmpleado(empleado1);
empresa.procesarEmpleado(empleado2);
empresa.procesarEmpleado(empleado3);
empresa.procesarEmpleado(empleado4);
empresa.procesarEmpleado(empleado5);  

let salida = document.getElementById ("salida");
salida.innerHTML = ` Resultados
<br> La cedula ${empleado1.cedula} 
tiene un sueldo de ${empleado1.sueldoActualizado()}

<br> La cedula ${empleado2.cedula} 
tiene un sueldo de ${empleado2.sueldoActualizado ()}

<br> La cedula ${empleado3.cedula} 
tiene un sueldo de ${empleado3.sueldoActualizado ()}

<br> La cedula ${empleado4.cedula}  
tiene un sueldo de ${empleado4.sueldoActualizado ()}

<br> La cedula ${empleado5.cedula} 
tiene un sueldo de ${empleado5.sueldoActualizado ()}  

<br> Monto de incremento de sueldos: ${empresa.montoTotal()}
<br> Porcentaje de los obreros: ${empresa.porcentajeObrero()}
`
