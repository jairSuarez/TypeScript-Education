(() => {
    //EL EJERCIO 1 CONSISTE EN CONVERTIR, CASTEAR, Y EN GENERAL SER LO MAS ESPECIFICO POSIBLE EN LOS TIPOS DE DATOS
    // QUE SE ESTAN USANDO EN EL CODIGO

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum FuerzaHeroes{
      fuerzaAcuaman = 0,
      fuerzaBatman = 1,
      fuerzaFlash = 5,
      fuerzaSuperman = 100

    }
    const fuerzaFlash: FuerzaHeroes = FuerzaHeroes.fuerzaFlash;
    const fuerzaSuperman: FuerzaHeroes = FuerzaHeroes.fuerzaSuperman;
    const fuerzaBatman: FuerzaHeroes = FuerzaHeroes.fuerzaBatman;
    const fuerzaAcuaman: FuerzaHeroes = FuerzaHeroes.fuerzaAcuaman;
  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda(): void {
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  