#!/bin/bash

startProblem=${startProblem:-01}
endProblem=${endProblem:-10}
execTimes=${execTimes:-2}
while [ $# -gt 0 ]; do
  if [[ $1 == *"--"* ]]; then
    declare $"${1/--/}"="$2"
  fi
  shift
done

function getExecCmd { # $1 is language, $2 is problem number
  case $1 in
    js)
      echo "node js/$2/main.js"
      ;;
    python)
      echo "python -m python._$2.main"
      ;;
    c)
      echo "c/$2/main.exe"
      ;;
    c-O3)
      echo "c-O3/$2/main.exe"
      ;;
    java)
      echo "java java_/_$2/Main.java"
      ;;
    wasm)
      echo "node wasm/$2/main.js"
      ;;
    wasm-O3)
      echo "node wasm-O3/$2/main.js"
      ;;
  esac
}

TIMEFORMAT="%R" # to make `time` output only 'real'. Unit will be seconds. (Site note: `time` writes into stderr)
for language in "js" "wasm" "wasm-O3" "python" "c" "c-O3" "java"; do
  for problemNumber in $(seq -f "%02g" ${startProblem} ${endProblem}); do
    execCmd=$(getExecCmd $language $problemNumber)
    echo "Running '${execCmd}' ${execTimes}-times:"
    for execTime in $(seq ${execTimes}); do
      time ${execCmd} >/dev/null
    done
  done
done
