function createListOfLengthN(n) {
  const l = [];
  for (let i = 0; i < n; i++) {
    l.push(undefined);
  }
  return l;
}

function initGitter(GitterSize) {
  const l = [];
  for (let i = 0; i < GitterSize; i++) {
    l.push(createListOfLengthN(GitterSize));
  }

  // set right border to 1
  for (let m = 0; m < GitterSize; m++) {
    l[m][0] = 1;
  }
  //set bottom border to 1
  for (let n = 0; n < GitterSize; n++) {
    l[0][n] = 1;
  }
  
  return l;
}

function f(Gittersize) {
  //  initialize
  const Gitter = initGitter(Gittersize)
  for (let m=1; m<Gittersize; m++){
    for ( let n = 1; n<Gittersize; n++){
      Gitter[m][n] = Gitter[m][n-1] + Gitter[m-1][n];
    }
  }
  return Gitter[Gittersize-1][Gittersize-1]

}

console.log("Ergebnis", f(21))
