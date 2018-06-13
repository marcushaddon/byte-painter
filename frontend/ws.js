"use strict";
var mockrandomdata_1 = require("./mockrandomdata");
function log_(msg) {
    document.getElementById('log').textContent += msg + '\n';
}
function draw() {
    var ws = new WebSocket('ws://localhost:8080/');
    ws.onopen = function () {
        log_('CONNECT');
    };
    ws.onclose = function () {
        log_('DISCONNECT');
    };
    ws.onmessage = function (event) {
        log_('MESSAGE: ' + typeof event.data);
    };
}
function setup() {
    document.querySelector('#trigger')
        .addEventListener('click', draw);
}
document.addEventListener('DOMContentLoaded', setup);
console.log(mockrandomdata_1["default"]);
