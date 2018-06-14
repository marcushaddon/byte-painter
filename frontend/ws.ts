import Painter from './painter';
import makeData from './mockrandomdata';

// I would never put anything on the global scope IRL,
// but I wanted to demonstrate that the Painter can take
// arbitrary amounts of data over time and "refresh" itself as needed.
var canvas: HTMLCanvasElement;
var painter: Painter;

function draw() {
  var ws = new WebSocket('ws://localhost:8080/');
  ws.binaryType = "arraybuffer";

  ws.onmessage = function(event) {
    const uint8arr = new Uint8Array(event.data);
    painter.process(uint8arr);
    painter.commit();
  };



}

function setup() {
  document.querySelector('#trigger')
  .addEventListener('click', draw);

  canvas = document.querySelector('canvas');
  painter = new Painter(canvas);

}

document.addEventListener('DOMContentLoaded', setup);