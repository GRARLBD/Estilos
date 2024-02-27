var gateway = `ws://${window.location.hostname}/ws`;
var websocket;
window.addEventListener('load', onLoad);
function initWebSocket() {
    console.log('Trying to open a WebSocket connection...');
    websocket = new WebSocket(gateway);
    websocket.onopen = onOpen;
    websocket.onclose = onClose;
    websocket.onmessage = onMessage; // <-- add this line
}
function onOpen(event) {
    console.log('Connection opened');
}
function onClose(event) {
    console.log('Connection closed');
    setTimeout(initWebSocket, 2000);
}
function onMessage(event) {
    var state;
    if (event.data == "1") {
        state = "ON";
    }
    else {
        state = "OFF";
    }
    //document.getElementById('state').innerHTML = state;
}
function onLoad(event) {
    initWebSocket();
    initButton();
}
function initButton() {
   // document.getElementById('button').addEventListener('click', toggle);
}
function toggle() {
    //websocket.send('toggle');
}

var selectedCirculo = 6;
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
      var posicionX = "calc(" + x + " + (" + salto + " * " + espaciado + "))";
      circulo.style.top = y;
      circulo.style.left = posicionX;
      caja.appendChild(circulo);

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
      circulo.id = "circulo" + (index);
      var posicionX = "calc(" + x + " + (" + salto + " * " + espaciado + "))";
      circulo.style.top = y;
      circulo.style.left = posicionX;

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
      var posicionX = "calc(" + x + " + (" + salto + " * " + espaciado + "))";

      circulo.style.top = y;
      circulo.style.left = posicionX;
      caja.appendChild(circulo);
      if (index === selectedCirculo) {
        selectedCirculo = circulo;
        selectedCirculo.style.backgroundColor = "green"; // Cambiar el color del círculo resaltado a verde
      }
    }