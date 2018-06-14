import Painter from './painter';
import makeData from './mockrandomdata';

var TextEncoder: any;

function log_(msg: any) {
  document.getElementById('log').textContent += msg + '\n';
}

function draw() {
  const canvas = document.querySelector('canvas');
  const painter = new Painter(canvas);

  var ws = new WebSocket('ws://localhost:8080/');
  ws.binaryType = 'arraybuffer';
  ws.onopen = function() {
    log_('CONNECT');
  };
  ws.onclose = function() {
    log_('DISCONNECT');
  };
  ws.onmessage = function(event) {
    // Maybe we don't need to clamp it?
    painter.process(event.data);
    painter.commit();

    
  };



}

function setup() {
    document.querySelector('#trigger')
    .addEventListener('click', draw);

    

    const data = makeData(1000);
    

}

document.addEventListener('DOMContentLoaded', setup);