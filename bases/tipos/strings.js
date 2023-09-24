"use strict";
(() => {
    var _a;
    //Siempre se debe declarar el tipo de dato que se va a utilizar para evitar errores
    //Si no se declara el tipo de dato puede ser cualquier tipo de dato (any) y en consecuencia 
    // no se pueden acceder a los metodos de los stringso del tipo de dato que se esta utilizando
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcán Negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    // El simnolo de interrogacion indica que si el valor es nulo o indefinido ralice la accion despues del simbolo ||
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
