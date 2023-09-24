"use strict";
(() => {
    //Se puede asignar un valor por defecto a un argumento
    //Al definir un valor por defecto, el argumento se vuelve opcional
    const fullName = (firstName, lastName, upper = false) => {
        //Si se llama a la función pasarndo el argumento upper como true,
        // el nombre completo se devolverá en mayúsculas
        // Caso contrario, se devolverá en minúsculas 
        if (upper) {
            return `${firstName} ${lastName || '\[No lastname\]'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '\[No lastname\]'}`;
        }
    };
    const name = fullName('Clark', 'Kent', true);
    console.log({ name });
})();
