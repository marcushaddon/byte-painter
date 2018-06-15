#!/bin/bash

# Read the first 100 lines from urandom, breaking every 100 bytes.
cat /dev/urandom | fold -w 100 | head -n 100

