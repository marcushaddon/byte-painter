import Painter from './painter';
import makeData from './mockrandomdata';

var canvas: HTMLCanvasElement;
var painter: Painter;

function draw() {
  // const canvas = document.querySelector('canvas');
  // const painter = new Painter(canvas);

  var ws = new WebSocket('ws://localhost:8080/');
  ws.binaryType = "arraybuffer";
  ws.onopen = function() {
    console.log('CONNECT');
    ws.binaryType = 'arraybuffer';
  };
  ws.onclose = function() {
    console.log('DISCONNECT');
  };
  ws.onmessage = function(event) {
    // Maybe we don't need to clamp it? 
    const uint8arr = new Uint8Array(event.data);
    console.log(uint8arr);
    painter.process(uint8arr);
    painter.commit();
  };



}

function setup() {
    document.querySelector('#trigger')
    .addEventListener('click', draw);

    canvas = document.querySelector('canvas');
    painter = new Painter(canvas);

    const data = makeData(10000);
    painter.process(data);
    painter.commit();
}

document.addEventListener('DOMContentLoaded', setup);