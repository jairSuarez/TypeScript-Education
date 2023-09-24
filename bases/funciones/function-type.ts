(() => {
    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (name: string): string => `Hello ${name}`;
    const saveTheWorld = () => 'The world is saved!';

    //Una varible puede ser de tipo función
    //TypeScript infiere el tipo de dato(s) que espera y/o retorna la función

    //let myFunction =  addNumbers;
    //console.log(myFunction(10, 2));

    //myFunction es de tipo función que no espera ni retorna nadaz
    let myFunction: () => void;
    //No se necesita poner los paréntesis en la asignación
    // ya que no se está invocando la función, sólo se está asignando
    // a la variable myFunction
    myFunction = saveTheWorld;
    console.log(myFunction());

})()