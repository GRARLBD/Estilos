var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var indexSeleccionado = urlParams.get('indexSeleccionado');

if (indexSeleccionado != null) {
  console.log("El valor de 'id' es: " + indexSeleccionado);
  dibujar(indexSeleccionado);
}

// Escuchar mensajes del padre
window.addEventListener('message', function (event) {

  // Actualizar la página con el contenido del mensaje
  var contenido = event.data;
  dibujar(contenido);
  escribirSensor(indexSeleccionado);

});;
console.log("paso!");

dibujar(-1);

function escribirSensor(indexSeleccionado){
  var lbl = document.getElementById("lblSensorImpactado");

  if (lbl != null){
    lbl.textContent = "Sensor " + indexSeleccionado;
  } else{
    console.log("lbl lblSensorImpactado: null");
  }
}

function dibujar(selectedCirculo) {
  var caja = document.getElementById("caja");
  var x = "39%";
  var y = "22%";
  var espaciado = "6%";
  var salto = 0;
  var limite = 4;
  var index = 0;

  for (var i = 0; i < limite; i++, salto++) {
    index += 1;
    var circulo = document.createElement("div");
    circulo.classList.add("circulo");
    circulo.id = "circulo" + (i + 1);
    var posicionX =
      "calc(" + x + " + (" + salto + " * " + espaciado + "))";
    circulo.style.top = y;
    circulo.style.left = posicionX;

    caja.appendChild(circulo);
    circulo.textContent = index;
    if (index === selectedCirculo) {
      selectedCirculo = circulo;
      selectedCirculo.style.backgroundColor = "green";
    }
  }

  x = "48%";
  y = "31%";
  espaciado = "6%";
  var salto = 0;
  var limite = 1;

  for (var i = 0; i < limite; i++, salto++) {
    index += 1;
    var circulo = document.createElement("div");
    circulo.classList.add("circulo");
    circulo.id = "circulo" + index;
    var posicionX =
      "calc(" + x + " + (" + salto + " * " + espaciado + "))";
    circulo.style.top = y;
    circulo.style.left = posicionX;
    circulo.textContent = index;

    caja.appendChild(circulo);
    if (index === selectedCirculo) {
      selectedCirculo = circulo;
      selectedCirculo.style.backgroundColor = "green"; // Cambiar el color del círculo resaltado a verde
    }
  }

  x = "48%";
  y = "41%";
  espaciado = "6%";
  var salto = 0;
  var limite = 1;

  for (var i = 0; i < limite; i++, salto++) {
    index += 1;
    var circulo = document.createElement("div");
    circulo.classList.add("circulo");
    circulo.id = "circulo" + (i + 1);
    var posicionX =
      "calc(" + x + " + (" + salto + " * " + espaciado + "))";
      circulo.textContent = index;

    circulo.style.top = y;
    circulo.style.left = posicionX;
    caja.appendChild(circulo);
    if (index === selectedCirculo) {
      selectedCirculo = circulo;
      selectedCirculo.style.backgroundColor = "green"; // Cambiar el color del círculo resaltado a verde
    }
  }
}