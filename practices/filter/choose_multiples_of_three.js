'use strict';

function choose_multiples_of_three(collection) {
  var result=[];
  for (let col of collection){
    if (col % 3==0)
      result.push(col);
  }
  return result;
}

module.exports = choose_multiples_of_three;
