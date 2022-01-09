#!/usr/bin/python3
# catch content-length
curl -sI "$1" | grep "Content-Length" | cut -d ' ' -f2
