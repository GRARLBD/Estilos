var zonas = [
    "CABEZA",
    "BRAZO DERECHO",
    "PECHO 1",
    "PECHO 2",
    "BRAZO IZQUIERDO",
    "ABDOMEN 1",
    "ABDOMEN 2",
    "PIERNA DERECHO",
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

    if (indexSeleccionado == 1){
        reproducir1();
    }
}

function reproducir1() {
    // Obtener el elemento de audio
    var audioPlayer = document.getElementById("audioPlayer");

    // Reproducir el audio
    audioPlayer.play();
}