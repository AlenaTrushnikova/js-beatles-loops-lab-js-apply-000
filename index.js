// add solution here

function theBeatlesPlay(musicians, instruments) {
  const arr = []
  var l = musicians.length
  
  for (let i = 0; i < l; i++) {
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

function iLoveTheBeatles() {
  const arr = []
  var i = 0
  
  do {
    arr.push(``)
  }
  while (i < 15);

}


do {
  text += "The number is " + i;
  i++;
}
while (i < 15);