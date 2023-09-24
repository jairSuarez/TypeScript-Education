"use strict";
(() => {
    //SOLO EN TYPESCRIPT
    //Con las tuplas podemos definir que tipo de dato va a tener cada posición del arreglo
    //En este caso, la primera posición va a ser un string, la segunda un number y la tercera un boolean
    //Si intentamos asignar un valor de otro tipo en la posición que no corresponde, nos va a marcar un error
    const hero = ['Dr. Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
