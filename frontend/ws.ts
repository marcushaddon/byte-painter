import Painter from './painter';
import data from './mockrandomdata';

function log_(msg: any) {
  document.getElementById('log').textContent += msg + '\n';
}

function draw() {
  var ws = new WebSocket('ws://localhost:8080/');
  ws.onopen = function() {
    log_('CONNECT');
  };
  ws.onclose = function() {
    log_('DISCONNECT');
  };
  ws.onmessage = function(event) {
    log_('MESSAGE: ' + typeof event.data);
  };


  // Draw on canvas
  const canvas = document.querySelector('canvas');


}

function setup() {
    document.querySelector('#trigger')
    .addEventListener('click', draw);

    const canvas = document.querySelector('canvas');
    const painter = new Painter(canvas);

    painter.process(data);
    painter.commit();
}

document.addEventListener('DOMContentLoaded', setup);