'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var result=[];
  for (let col_a of collection_a){
    for (let col_b of collection_b){
      if (col_a%col_b==0)
        result.push(col_a);
    }
  }
  return result;
}

module.exports = choose_divisible_integer;
