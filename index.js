// add solution here

function theBeatlesPlay(musicians, instruments) {
  const arr = []
  var i = 0
      l = musicians.length
  
  for (i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr 
}

function johnLennonFacts(facts) {
  const factsWithExclamationPoints = []
  var i = 0
  
  while (facts[i]) {
    factsWithExclamationPoints.push(`${facts[i]}!!!`);
    i++;
  }
  return factsWithExclamationPoints
}

