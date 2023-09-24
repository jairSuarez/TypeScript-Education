(() => {
  const numbers: number[] = [1, 2, 3, 4, 5];

  const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
  
  //En automatico Ts detecta el tipo de dato que se esta utilizando y se puede acceder a los metodos del tipo de dato
  villians.forEach(v => console.log(v.toUpperCase()));

})()