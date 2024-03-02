var index = 0;
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var indexSeleccionado = urlParams.get('indexSeleccionado');

if (indexSeleccionado != null) {
  console.log("El valor de 'id' es: " + indexSeleccionado);
  dibujarFrontal(indexSeleccionado);
}


// Escuchar mensajes del padre
window.addEventListener('message', function (event) {

  // Actualizar la página con el contenido del mensaje
  var contenido = event.data;
  dibujarFrontal(contenido);
  dibujarVistaTrasera(contenido);
  enviarDatosInterno(contenido);
  index = 0;
});



dibujarFrontal(-1);
dibujarVistaTrasera(-1);

function enviarDatosInterno(contenido) {
  // Obtener el iframe
  var iframe = document.getElementById("miIframe");

  if (iframe != null) {
    // Enviar datos al iframe
    iframe.contentWindow.postMessage(contenido, '*');
  } else {
    console.log("iframe null");
  }
}

function dibujarFrontal(selectedCirculo) {
  var caja = document.getElementById("caja1");

  var x = "45%";
  var y = "5%";
  var espaciado = "13%";
  var salto = 0;
  var limite = 1;


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

  x = "26%";
  y = "22%";
  espaciado = "13%";
  salto = 0;
  limite = 4;

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

  x = "45%";
  y = "31%";
  espaciado = "6%";
  salto = 0;
  limite = 1;

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

  x = "45%";
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

  x = "35%";
  y = "65%";
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

  x = "55%";
  y = "65%";
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

function dibujarVistaTrasera(selectedCirculo) {
  var caja = document.getElementById("caja2");

  var x = "45%";
  var y = "5%";
  var espaciado = "13%";
  var salto = 0;
  var limite = 1;


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

  x = "26%";
  y = "22%";
  espaciado = "13%";
  salto = 0;
  limite = 4;

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

  x = "45%";
  y = "31%";
  espaciado = "6%";
  salto = 0;
  limite = 1;

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

  x = "45%";
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

  x = "35%";
  y = "65%";
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

  x = "55%";
  y = "65%";
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