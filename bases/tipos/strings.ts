(() => {

    //Siempre se debe declarar el tipo de dato que se va a utilizar para evitar errores
    //Si no se declara el tipo de dato puede ser cualquier tipo de dato (any) y en consecuencia 
    // no se pueden acceder a los metodos de los stringso del tipo de dato que se esta utilizando
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Héroe: Volcán Negro`;

    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());

    // El simnolo de interrogacion indica que si el valor es nulo o indefinido ralice la accion despues del simbolo ||
    console.log( batman[10]?.toUpperCase() || 'No está presente' );
})();