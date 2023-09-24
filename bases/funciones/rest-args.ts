(() => {
  
    //Con el operator rest (...), se pueden pasar n cantidad de argumentos
    // Por defecto, el argumento rest es un array de tipo any  
    const fullName = (firstName: string, ...restArgs: string[]): string => {
      //Con el método join, se puede unir los elementos de un array en un string
      // en este caso, se unen los elementos del array restArgs, separados por un espacio  
      return `${firstName} ${ restArgs.join(' ')}`;
    }
   
    const name = fullName('Clark', 'Joseph', 'Kent');
    console.log({name});
  
  })()