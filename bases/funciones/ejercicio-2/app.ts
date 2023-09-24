// Funciones Básicas
//*Correcto
function sumar( a: number, b:number ): number{
  return a + b;
}

//*Correcto
const contar = ( heroes: string[] ): number => {
  return heroes.length;
}

//? falto añadir el tipo de dato de superHeroes
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
//? Faltó añadir el tipo de dato del argumento "llamar"
const llamarBatman = ( llamar: boolean = true ): void => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
//? Faltó añadir el tipo de dato que retorna la función unionheroes
const unirheroes = ( ...personas: string[] ): string => {
  return personas.join(", ");
}


// Tipo funcion
//? Se puede dejar areglo: [] o arreglo: string[]
const noHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: [] ): void=> {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco = (numero: number, texto: string, booleano: boolean, arreglo: []): void => {};
noHaceNadaTampoco = noHaceNada

