import Cl_articulo from "./Cl_articulo.js";
import Cl_ganancia from "./Cl_ganancia.js";

let art1 = new Cl_articulo (10);
let art2 = new Cl_articulo (20);
let art3 = new Cl_articulo (14);
let art4 = new Cl_articulo (6);
let art5 = new Cl_articulo (4);

let ganancia = new Cl_ganancia();

ganancia.procesarArticulo (art1);
ganancia.procesarArticulo (art2);
ganancia.procesarArticulo (art3);
ganancia.procesarArticulo (art4);
ganancia.procesarArticulo (art5);


let salida = document.getElementById ("salida")
salida.innerHTML = `Resultados:
<br> La ganancia sera de: Bs ${ganancia.gananciaTotal()}
`

