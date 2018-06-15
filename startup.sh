#!/bin/bash

echo "-----------------------------------------------------------"
echo
echo "Please open file:///$PWD/frontend/index.html in your browser!"
echo
echo "-----------------------------------------------------------"
websocketd --port=8080 -binary=true ./bytes.sh
