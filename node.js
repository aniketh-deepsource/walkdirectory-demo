const calc = require('./calc.js')


const add = calc.add

function checkSafe(a){
  if(a > 1){
     // ...
  }
}

const isSafe = checkSafe(2)

if(isSafe){
  // ...
}
