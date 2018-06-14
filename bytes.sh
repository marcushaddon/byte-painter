#!/bin/bash
# for ((COUNT = 1; COUNT <= 5000; COUNT++));
# do
#   echo $((RANDOM % 255))
#   # sleep 1
# done

# Alternative: actually puts out random bytes (rather )
# shred -s 10000 -> random.txt && cat random.txt && rm random.txt

# cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 100 | head -n 100
cat /dev/urandom | fold -w 100 | head -n 100

