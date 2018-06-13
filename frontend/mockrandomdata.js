"use strict";
var data = (function () {
    var arr = new Uint8Array(1000);
    for (var i = 0; i < 1000; i++) {
        arr[i] = Math.floor(Math.random() * 256);
    }
    return arr;
})();
exports.__esModule = true;
exports["default"] = data;
