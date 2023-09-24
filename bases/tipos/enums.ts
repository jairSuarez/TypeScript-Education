(() => {
  //SOLO EN TYPESCRIPT
  // El tipo de dato enum nos permite enumerar un conjunto de valores de manera que tengan un significado semántico
  // En este caso, los valores de AudioLevel son min, medium y max, pero en realidad son 1, 2 y 10 respectivamente
  // Los valores de un enum se pueden asignar de manera explícita o implícita
  // Si no se asignan de manera explícita, el primer valor es 0 y los siguientes se incrementan en 1
  enum AudioLevel {
    min = 1,
    medium, // medium = 2
    high, // high = 3
    max = 10
  }
  // enum es un tipo de dato numerico
  let currentAudio: AudioLevel = AudioLevel.max;

  console.log(currentAudio);
  console.log(AudioLevel);
})()