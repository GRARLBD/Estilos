var zonas = [
    "CABEZA",
    "PECHO 1",
    "PECHO 2",
    "ABDOMEN 1",
    "ABDOMEN 2",
    "ESPALDA 1",
    "ESPALDA 2",
    "ESPALDA BAJA 1",
    "ESPALDA BAJA 2",
    "HOMBRO 1",
    "HOMBRO 2"
  ];

  
// Escuchar mensajes del padre
window.addEventListener('message', function (event) {

    // Actualizar la página con el contenido del mensaje
    var contenido = event.data;
    console.log("dato: " + contenido);
    escribirSensor(contenido);
  
  });;

function escribirSensor(indexSeleccionado){
    var lbl1 = document.getElementById("lblSensorImpactado");
    var lbl2 = document.getElementById("lblNombreSensor");
  
    if (lbl1 != null){
      lbl1.textContent = "Sensor " + indexSeleccionado;
    } else{
      console.log("lbl1 : null");
    }

    if (lbl2 != null){
        lbl2.textContent = zonas[indexSeleccionado];
      } else{
        console.log("lbl1 : null");
      }
  }