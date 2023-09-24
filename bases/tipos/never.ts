(() => {
    //el tipo "never" se usa para indicar que una funcion nunca va a retornar un valor o
    // no debe de tener un punto al alcanzable despues de la ejecucion de la funcion
    //lanza un error y es por eso que el programa se detiene
  const error = (message: string): never => {
    throw new Error(message);
  }
  //Si no se especfica que la funcion es de tipo "never" o number marcará error
  //En este caso el if no se ejecuto ya que siempre sera false, se pasa al return
  //el return rería alcanzable y por lo tanto se genera un error
  const error2 = (message: string):(never|number) => {
    if (false) {
      throw new Error(message);
    }
    return 1;
  }
  error('Auxilio!');
    //Nunca se ejecutara
  console.log("Hello World");
})()