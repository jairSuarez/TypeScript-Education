"use strict";
(() => {
    //void se usa para indicar que una funcion no retorna nada
    function callBatman() {
    }
    //Si se intenta retornar algo, marcara error
    const callSuperman = () => {
        return;
    };
    // al asgnar a la 'a' el valor de callBatman, el valor de 'a' sera "undefined"
    const a = callBatman();
    console.log(a);
})();
