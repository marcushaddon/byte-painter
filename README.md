# byte-painter

## Prerequisites
1. websocketd
2. Optional: Node/npm (if you want to launch it via npm)

## Installation
1. `$ git clone <this repo>`
2. `$ npm run start`
OR 
3. `$ ./startup.sh`
4. Copy and paste the URL provided into the browser of your choice, and click 'Paint'!


### Instructions
In typescript create a bash session using “websocketd” (https://github.com/joewalnes/websocketd). Execute a command to output 10kb of random data from the WebSocket. Use that data to draw a 800x100 canvas with each pixel representing a single bit. For every bit with a value of 1, draw the pixel black, otherwise, draw it white.

This application should not be built with dependencies (frameworks included).
The entire application should complete drawing the canvas in less than 1 second.