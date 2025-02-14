/*
sea el nombre y el sexo de varias personas (F-M).
se necesita un programa que lea estos datos y reporte 
al final la cantidad de hombres t la cantidad de mujeres procesadas.
* */

import Cl_cantidad from "./Cl_cantidad.js";
import Cl_persona from "./Cl_persona.js";

let persona1 = new Cl_persona ("Luisa", "F");
let persona2 = new Cl_persona ("Ana", "F");
let persona3 = new Cl_persona ("Jose", "M");
let persona4 = new Cl_persona ("Carmen", "F");
let persona5 = new Cl_persona ("Rosa", "F");
let persona6 = new Cl_persona ("Jose", "M");
let persona7= new Cl_persona ("Maria", "F");
let persona8 = new Cl_persona ("Luz", "F");
let persona9 = new Cl_persona ("Rafael", "M");
let persona10 = new Cl_persona ("Liz", "F");
let persona11 = new Cl_persona ("Marcos", "M");
let persona12 = new Cl_persona ("Leo" ,"M");

//crear objeto
let cantidad = new Cl_cantidad();


cantidad.procesarPersona (persona1);
cantidad.procesarPersona (persona2);
cantidad.procesarPersona (persona3);
cantidad.procesarPersona (persona4);
cantidad.procesarPersona (persona5);
cantidad.procesarPersona (persona6);
cantidad.procesarPersona (persona7);
cantidad.procesarPersona (persona8);
cantidad.procesarPersona (persona9);
cantidad.procesarPersona (persona10);
cantidad.procesarPersona (persona11);
cantidad.procesarPersona (persona12);


let salida = document.getElementById ("salida");
salida.innerHTML = `Resultados;
<br> Cantidad de personas: ${cantidad.cantidadPersonas()}
<br> Cantidad de hombres: ${cantidad.cantidadHombres()}
<br> Cantidad de mujeres: ${cantidad.cantidadMujeres()}`
