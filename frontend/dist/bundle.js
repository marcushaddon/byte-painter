!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";function r(t,e){return(t&e)===e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=[],n=128;n>0;)e.push(r(t,n)),n=n>>=1;return e}},function(t,e,n){"use strict";var r=n(0),a=function(){function t(t){this._canvas=t,this._canvasContext=this._canvas.getContext("2d"),this._width=this._canvas.width,this._height=this._canvas.height,this._numChannels=this._width*this._height*4,this._imgData=this._canvasContext.getImageData(0,0,this._width,this._height),this._currentChannel=0}return t.prototype.process=function(t){for(var e,n=this._imgData.data,a=0,i=t.length;a<i;a++)for(var o=t[a],s=0,u=r.default(o);s<u.length;s++){e=u[s]?[255,255,255,255]:[0,0,0,255],n[this._currentChannel]=e[0],n[this._currentChannel+1]=e[1],n[this._currentChannel+2]=e[2],n[this._currentChannel+3]=e[3],this._currentChannel=(this._currentChannel+4)%this._numChannels}},t.prototype.commit=function(){this._canvasContext.putImageData(this._imgData,0,0)},t}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},function(t,e,n){"use strict";var r,a,i=n(1);function o(){var t=new WebSocket("ws://localhost:8080/");t.binaryType="arraybuffer",t.onmessage=function(t){var e=new Uint8Array(t.data);a.process(e),a.commit()}}document.addEventListener("DOMContentLoaded",function(){document.querySelector("#trigger").addEventListener("click",o),r=document.querySelector("canvas"),a=new i.default(r)})}]);