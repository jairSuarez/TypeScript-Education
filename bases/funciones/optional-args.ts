(() => {
    
    //El signo de interrogación indica que el argumento es opcional
    const fullName = (firstName: string, lastName?: string): string => {
      //Se usa || para asignar un valor por defecto en caso de que el argumento 
      // sea undefined es decir, si no asignamos un valor al argumento lastName
      return `${firstName} ${ lastName || '\[No lastname\]'}`;
    }
    const name = fullName('Clark');
    console.log({name});
  
  })()