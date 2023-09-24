"use strict";
// Funciones Básicas
//*Correcto
function sumar(a, b) {
    return a + b;
}
//*Correcto
const contar = (heroes) => {
    return heroes.length;
};
//? falto añadir el tipo de dato de superHeroes
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
//? Faltó añadir el tipo de dato del argumento "llamar"
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
// Rest?
//? Faltó añadir el tipo de dato que retorna la función unionheroes
const unirheroes = (...personas) => {
    return personas.join(", ");
};
// Tipo funcion
//? Se puede dejar areglo: [] o arreglo: string[]
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco = (numero, texto, booleano, arreglo) => { };
noHaceNadaTampoco = noHaceNada;
