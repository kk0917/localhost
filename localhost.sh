#!/bin/bash

#deno
if [ $# -ne 1 ]; then
  echo "ERROR : Argument is $#" 1>&2
  exit 9
fi

deno run --allow-net /Users/ko-kamenashi/localhost/webserver.ts $1
