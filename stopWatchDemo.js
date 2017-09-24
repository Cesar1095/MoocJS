// variables globales
var started = false;
var time = 0.0;
var timesDisplayed = [];


init();

// Definimos las funciones
function display(item, id) {
  document.getElementById(id).innerHTML = item;
}

function startStop() {
  if (started == false) {
    countdown = setInterval(function() {
      time++;
      display(time, 'stopwatch');
    }, 100)
    started = true;
  } else {
    clearInterval(countdown);
    started = false;
  }
}

function reset() {
  time = 0.0;
  display(time, 'stopwatch');
  display('', 'pasttimes');
}

function recTime() {
  document.getElementById('pasttimes').innerHTML += time + "<br>";
}

function init() {
  display(0, 'stopwatch')

  // Obtenenos variables del DOM
  var startStopButton = document.getElementById('startstop');
  var resetButton = document.getElementById('reset');
  var recTimeButton = document.getElementById('rectime');
  
  // Eventos
  startStopButton.addEventListener('click', function() {
    startStop();
  });
  
  resetButton.addEventListener('click', function() {
    reset();
  });
  
  recTimeButton.addEventListener('click', function() {
    recTime();
  });
  
  // Eventos desde teclado
 
}
document.addEventListener('keydown',function(event){
  switch(event.keyCode){
    case 82://82='r'
    reset();
    break;
    case 83: // 83 = 's'
    startstop();
    break;
    case 84: //84 ='t'
    record();
    break;
  }
});