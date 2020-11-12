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

TIMEFORMAT="%R" # to make `time` output only 'real'. Unit will be seconds. (Site note:`time` writes into stderr)
languages=("main.js:js/:node" "main.py:python/:python main.exe:c/ Main.java:java_/_:java") # file:pathPrefix:execComm
for language in ${languages[*]}; do
  myTmp=(${language//:/ })
  file=${myTmp[0]}
  pathPrefix=${myTmp[1]}
  execComm=${myTmp[2]}

  for problemNumber in $(seq -f "%02g" ${startProblem} ${endProblem}); do
    command="${execComm} ${pathPrefix}${problemNumber}/${file}"
    echo "Running '${command}' ${execTimes}-times:"
    for execTime in $(seq ${1} ${execTimes}); do
      time ${command} >/dev/null
    done
  done
done
