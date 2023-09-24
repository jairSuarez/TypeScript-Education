"use strict";
(() => {
    //Al denifir una variable con any, se puede reasignar cualquier tipo de dato
    //Evitar utilizar any en culquier caso
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr. Strange';
    //El casting permite acceder a los metodos del tipo de dato que se esta utilizando
    //Un metodo de casting, trata la variable como un string
    console.log(avenger.charAt(0));
    //Otro metodo de casting, trata la variable como un number
    avenger = 150.124578;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
