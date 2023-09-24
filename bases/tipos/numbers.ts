// función anonima autoinvocada
(() => {
    let avengers;
    console.log(avengers);

    const villians: number = 20;

    // aunque avengers no esta inicializada la condición se evalua como true y se ejecuta el if
    if( avengers < villians ) {
        console.log('Estamos en problemas');
    } else {
        console.log('Estamos salvados');
    }
    //NaN es un tipo de dato number
    avengers = Number('55A');
    console.log({avengers});
})();