var zonas = [
    "CABEZA",
    "BRAZO DERECHO",
    "PECHO 1",
    "PECHO 2",
    "BRAZO IZQUIERDO",
    "ABDOMEN 1",
    "ABDOMEN 2",
    "PIERNA DERECHA",
    "PIERNA IZQUIERDA",
    "NUCA",
    "BRAZO IZQUIERDO TRASERO",
    "ESPALDA 1",
    "ESPALDA 2",
    "BRAZO DERECHO TRASERO",
    "ESPALDA 3",
    "ESPALDA 4",
    "PIERNA IZQUIERDA TRASERA",
    "PIERNA DERECHA TRASERA"
];


// Escuchar mensajes del padre
window.addEventListener('message', function (event) {

    // Actualizar la página con el contenido del mensaje
    var contenido = event.data;
    escribirSensor(contenido);

});;

function escribirSensor(indexSeleccionado) {
    var lbl1 = document.getElementById("lblSensorImpactado");
    var lbl2 = document.getElementById("lblNombreSensor");

    if (lbl1 != null) {
        lbl1.textContent = "Sensor " + indexSeleccionado;
    } else {
        console.log("lbl1 : null");
    }

    if (lbl2 != null) {
        lbl2.textContent = zonas[indexSeleccionado - 1];
    } else {
        console.log("lbl1 : null");
    }

    switch(indexSeleccionado){
        case 1: reproducir("audio/cabeza.mp3"); break;
        case 2: reproducir("audio/impacto en BRAZO DER.mp3"); break;
        case 3: reproducir("audio/impacto en PECHO 1.mp3"); break;
        case 4: reproducir("audio/impacto en PECHO 2.mp3"); break;
        case 5: reproducir("audio/impacto en BRAZO IZQ.mp3"); break;
        case 6: reproducir("audio/impacto en ABDOMEN 1.mp3"); break;
        case 7: reproducir("audio/impacto en ABDOMEN 2.mp3"); break;
        case 8: reproducir("audio/impacto en PIERNA DE.mp3"); break;
        case 9: reproducir("audio/impacto en PIERNA IZ.mp3"); break;
        case 10: reproducir("audio/impacto en nuca.mp3"); break;
        case 11: reproducir("audio/impacto en BRAZO IZQ trasero.mp3"); break;
        case 12: reproducir("audio/impacto en espalda 1.mp3"); break;
        case 13: reproducir("audio/impacto en espalda 2.mp3"); break;
        case 14: reproducir("audio/impacto en BRAZO DER trasero.mp3"); break;
        case 15: reproducir("audio/impacto en espalda 3.mp3"); break;
        case 16: reproducir("audio/impacto en espalda 4.mp3"); break;
        case 17: reproducir("audio/impacto en PIERNA IZ trasera.mp3"); break;
        case 18: reproducir("audio/impacto en PIERNA DE trasera.mp3"); break;
    }
}

function reproducir(source) {
    var audio = document.createElement("audio");
    
    audio.autoplay = true;
    audio.muted = false;
    audio.load()
    audio.src = source;
    audio.play(); 
}
