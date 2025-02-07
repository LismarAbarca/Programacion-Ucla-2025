import Cl_cliente from "./Cl_cliente.js";
import Cl_empresa from "./Cl_empresa.js";

let cliente1 = new Cl_cliente ("Juan",2, 20, "M" );
let cliente2 = new Cl_cliente ("Ana", 1, 19, "F");
let cliente3 = new Cl_cliente ("Lin", 2, 18, "M" );
let cliente4 = new Cl_cliente ("Mary", 1, 15, "F");
let empresa = new Cl_empresa();

empresa.procesarCliente (cliente1);
empresa.procesarCliente (cliente2);
empresa.procesarCliente (cliente3);
empresa.procesarCliente (cliente4);

let salida = document.getElementById ("salida");
salida.innerHTML = ` Resultado
<br> Cantidad de clientes femeninos mayores de edad: ${empresa.ClienteFMayorEdad()}

<br> La menor edad atendida fue de: ${empresa.clienteMenorEdad()}

<br>El promedio de edad de los clientes es: ${empresa.promedio()}`