"use strict";
(() => {
    //SOLO EN TYPESCRIPT
    // El tipo de dato enum nos permite enumerar un conjunto de valores de manera que tengan un significado semántico
    // En este caso, los valores de AudioLevel son min, medium y max, pero en realidad son 1, 2 y 10 respectivamente
    // Los valores de un enum se pueden asignar de manera explícita o implícita
    // Si no se asignan de manera explícita, el primer valor es 0 y los siguientes se incrementan en 1
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["high"] = 3] = "high";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    // enum es un tipo de dato numerico
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
