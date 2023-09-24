"use strict";
(() => {
    //En esta declaración de función, los argumentos son obligatorios
    //Además, debemos simepre definir el tipo de dato que retornará la función
    // así como el tipo de dato de los argumentos
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    //Al invocar la función, debemos pasar los argumentos requeridos
    // según el tipo de dato que se espera
    const name = fullName('Clark', 'Kent');
    console.log({ name });
})();
