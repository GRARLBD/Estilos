
// Escuchar mensajes del padre
window.addEventListener('message', function (event) {

    // Actualizar la página con el contenido del mensaje
    var contenido = event.data;
    escribirSensor(indexSeleccionado);
  
  });;

function escribirSensor(indexSeleccionado){
    var lbl = document.getElementById("lblSensorImpactado");
  
    if (lbl != null){
      lbl.textContent = "Sensor " + indexSeleccionado;
    } else{
      console.log("lbl lblSensorImpactado: null");
    }
  }